"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = require("dotenv");
const express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
const createSchema_1 = require("./utils/createSchema");
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv.config();
    const app = express();
    const schema = yield createSchema_1.createSchema();
    const server = new apollo_server_express_1.ApolloServer({
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
}))();
//# sourceMappingURL=index.js.map