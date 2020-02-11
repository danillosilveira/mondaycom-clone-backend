import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { QueryResolver } from "../graphql/user/Query";
import { RegisterResolver } from "../graphql/user/Register";

export const createSchema = async (): Promise<GraphQLSchema> => {
  try {
    const schema: GraphQLSchema = await buildSchema({
      resolvers: [QueryResolver, RegisterResolver]
    });

    return schema;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
