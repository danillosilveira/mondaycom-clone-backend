import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Board {
  @Field(() => ID)
  public id: any;

  @Field()
  @prop({ required: true, type: String })
  public user_id?: any;

  @Field()
  @prop({ unique: true, required: true, type: String })
  public title?: string;

  @Field()
  @prop({ required: true, type: String, minlength: 200 })
  public description?: string;

  @Field()
  @prop({ default: Date.now(), type: Date })
  public createdAt?: Date;
}

export const BoardModel = getModelForClass(Board);
