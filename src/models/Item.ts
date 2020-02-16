import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Item {
  @Field(() => ID)
  public id: any;

  @Field()
  @prop({ required: true, type: String })
  public board_id?: any;

  @Field()
  @prop({ required: true, type: String })
  public group_id?: any;

  @Field()
  @prop({ required: true, type: String })
  public content?: string;
}

export const ItemModel = getModelForClass(Item);
