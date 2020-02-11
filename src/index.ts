import "reflect-metadata";
import * as dotenv from "dotenv";
import * as express from "express";
import databaseConnection from "./helpers/dbConn";
import { GraphQLSchema } from "graphql";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./utils/createSchema";

(async () => {
  dotenv.config();

  databaseConnection({ db: process.env.DB_STRING as string });

  const app: express.Application = express();

  const schema: GraphQLSchema = await createSchema();

  const server: ApolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true
  });

  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: true,
      credentials: true
    }
  });

  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
  });
})();
