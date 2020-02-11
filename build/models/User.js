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
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = require("./Token");
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
let User = class User {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ unique: true, required: true, type: String }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ unique: true, required: true, type: String }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typegoose_1.prop({ required: true, type: String, minlength: 6 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: Date.now(), type: Date }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    type_graphql_1.ObjectType()
], User);
exports.User = User;
let RegisterReturnType = class RegisterReturnType {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Token_1.Token)
], RegisterReturnType.prototype, "token", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterReturnType.prototype, "errorMessage", void 0);
RegisterReturnType = __decorate([
    type_graphql_1.ObjectType()
], RegisterReturnType);
exports.RegisterReturnType = RegisterReturnType;
exports.UserModel = typegoose_1.getModelForClass(User);
//# sourceMappingURL=User.js.map