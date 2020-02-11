import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { QueryResolver } from "./graphql/user/Query";

export const createSchema = async (): Promise<GraphQLSchema> => {
  try {
    const schema: GraphQLSchema = await buildSchema({
      resolvers: [QueryResolver]
    });

    return schema;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
