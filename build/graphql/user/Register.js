"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const RegisterInput_1 = require("./register/RegisterInput");
const User_1 = require("./../../models/User");
const type_graphql_1 = require("type-graphql");
const bcrypt = require("bcrypt");
const token_1 = require("../../helpers/token");
let RegisterResolver = class RegisterResolver {
    register({ fullName, email, password, teamName }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmail = yield User_1.UserModel.findOne({ email });
            if (userEmail) {
                return {
                    token: {
                        token: null
                    },
                    errorMessage: "User already exists"
                };
            }
            const hashedPassword = yield bcrypt.hash(password, 12);
            const newUser = yield User_1.UserModel.create({
                fullName,
                email,
                password: hashedPassword,
                teamName,
                createdAt: Date.now()
            });
            return {
                token: {
                    token: token_1.token.generate(newUser, "12h")
                },
                errorMessage: "No error."
            };
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => User_1.RegisterReturnType, { nullable: true }),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterInput_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "register", null);
RegisterResolver = __decorate([
    type_graphql_1.Resolver()
], RegisterResolver);
exports.RegisterResolver = RegisterResolver;
//# sourceMappingURL=Register.js.map