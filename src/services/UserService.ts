import { LogLevel, LogTypes } from '../enums/LogTypes'
import { UserTypes } from '../enums/UserTypes'
import { listUsers } from '../graphql/queries'
import { updateUser as updateUserMutation } from '../graphql/mutations'
import { User } from '../platform-models/User'
import Logger from '../utils/Logger'
import AuthService from './AuthService'
import GraphQLService, { FilterInput } from './GraphQLService'
import { ListUsersQuery, ModelUserConditionInput, UpdateUserInput, UpdateUserMutation } from '../API'

class UserService {
  public async createUser (user: User, type: UserTypes) {
    try {
      const updatedUser: User = {
        ...user,
        name: user.name.trim(),
        groups: [...user.groups, type]
      }
      const cognitoUser = await AuthService.createUser(updatedUser)

      if (!cognitoUser) {
        return
      }

      Logger.log(
        LogLevel.INFO,
        LogTypes.UserService,
        'User successfully created'
      )

      return cognitoUser
    } catch (error) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.UserService,
        'Error signing up',
        error
      )
    }
  }

  private filterByGroupType = (type: UserTypes) => {
    return { groups: { contains: type } }
  }

  private filterByCognitoId = (cognitoId: string): ModelUserConditionInput => {
    return { cognitoId: { eq: cognitoId } }
  }

  public fetchUserByCognitoId = async (cognitoId: string) => {
    const filterByCognitoId = this.filterByCognitoId(cognitoId)
    const users = await this.fetchUsers(filterByCognitoId)

    return users?.listUsers?.items[0]
  }

  public fetchUsersByType = async (type: UserTypes | 'ALL', nextToken: string | null = null) => {
    const filter = type !== 'ALL' ? this.filterByGroupType(type) : {}

    return await this.fetchUsers(filter, nextToken)
  }

  public getUserType = (user: User) => {
    if (!user) {
      return
    }

    const { groups } = user

    return Object.values(UserTypes).find((group) => groups?.includes(group))
  }

  private fetchUsers = async (filter: Object, nextToken?: string | null) => {
    return GraphQLService.fetchQuery<ListUsersQuery>({
      query: listUsers,
      filter: filter as FilterInput,
      nextToken
    })
  }

  public updateUser = async (user: UpdateUserInput) => {
    return GraphQLService.fetchQuery<UpdateUserMutation>({
      query: updateUserMutation,
      filter: this.filterByCognitoId(user.cognitoId as string),
      input: user
    })
  }
}

export default new UserService()
