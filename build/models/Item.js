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
let Item = class Item {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], Item.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String }),
    __metadata("design:type", Object)
], Item.prototype, "board_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String }),
    __metadata("design:type", Object)
], Item.prototype, "group_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, type: String }),
    __metadata("design:type", String)
], Item.prototype, "content", void 0);
Item = __decorate([
    type_graphql_1.ObjectType()
], Item);
exports.Item = Item;
exports.ItemModel = typegoose_1.getModelForClass(Item);
//# sourceMappingURL=Item.js.map