import { GraphQLOptions, GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";

interface SingleResult<T> {
  [key: string]: T | Array<T>;
}
export interface GraphQLResultType<T> {
  data?: SingleResult<T>;
  errors?: object;
}

class GraphQLService {
  public graphQL = <T extends object>(
    options: GraphQLOptions,
    additionalHeaders?: {
      [key: string]: string;
    }
  ): Promise<GraphQLResult<T>> | undefined => {
    try {
      const query = API.graphql(options, additionalHeaders) as Promise<
        GraphQLResult<T>
      >;
      return query;
    } catch (e) {
      console.log(e);
    }
  };
}

export default new GraphQLService();
