import { LogLevel, LogTypes } from "../enums/LogTypes";
import { User } from "../platform-models/User";
import { DynamoDBUser } from "../models/index";
import Logger from "../utils/Logger";
import CognitoService from "./aws/CognitoService";
import GraphQLService from "./GraphQLService";
import { Auth, graphqlOperation } from "aws-amplify";
import { createDynamoDBUser } from "../graphql/mutations";

class AuthService {
  public createUser = async (user: User) => {
    const { name, email: username, type } = user;

    try {
      const adminCreateUserCommandResponse =
        await CognitoService.createCognitoUser(username, name, type); // Create Cognito user in the User Pool
      const confirmCognitoUserResponse =
        await CognitoService.confirmCognitoUser(username); // Auto-confirm email

      if (!adminCreateUserCommandResponse) {
        return;
      }

      if (!confirmCognitoUserResponse) {
        return;
      }

      const { userId, fullName, email } = CognitoService.parseCognitoUser(
        adminCreateUserCommandResponse?.Attributes
      );
      const createDynamoDBUserResponse = await this.createDynamoDBUser(
        user,
        userId
      );
      const assignUserToCognitoGroupResponse =
        await CognitoService.assignUserToCognitoGroup(
          userId || "",
          user.groups
        );

      if (!assignUserToCognitoGroupResponse || !createDynamoDBUserResponse) {
        return;
      }

      return { userId, fullName, email };
    } catch (error) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.AuthService,
        "Error when creating Cognito user",
        error
      );
    }
  };

  private createDynamoDBUser = async (
    user: User,
    cognitoId: string | undefined
  ) => {
    if (!cognitoId) {
      return;
    }

    const { name, email, groups, phone } = user;
    const dynamoDbBUser = new DynamoDBUser({
      name,
      email,
      cognitoId,
      groups,
      phone,
    });

    return await GraphQLService.graphQL(
      graphqlOperation(createDynamoDBUser, { input: dynamoDbBUser })
    );
  };

  public signIn = async (email: string, password: string) => {
    try {
      return Auth.signIn(email, password);
    } catch (error) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.AuthService,
        "Error when signing in",
        error
      );
    }
  };
}

export default new AuthService();
