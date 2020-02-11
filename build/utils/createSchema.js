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
const type_graphql_1 = require("type-graphql");
const Query_1 = require("../graphql/user/Query");
const Register_1 = require("../graphql/user/Register");
const Login_1 = require("../graphql/user/Login");
exports.createSchema = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [Query_1.QueryResolver, Register_1.RegisterResolver, Login_1.LoginResolver]
        });
        return schema;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
});
//# sourceMappingURL=createSchema.js.map