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
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
let Board = class Board {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], Board.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String }),
    __metadata("design:type", Object)
], Board.prototype, "user_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ unique: true, required: true, type: String }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String, minlength: 200 }),
    __metadata("design:type", String)
], Board.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: Date.now(), type: Date }),
    __metadata("design:type", Date)
], Board.prototype, "createdAt", void 0);
Board = __decorate([
    type_graphql_1.ObjectType()
], Board);
exports.Board = Board;
exports.BoardModel = typegoose_1.getModelForClass(Board);
//# sourceMappingURL=Board.js.map