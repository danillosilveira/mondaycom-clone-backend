import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Group {
  @Field(() => ID)
  public id: any;

  @Field()
  @prop({ required: true, type: String })
  public board_id?: any;

  @Field()
  @prop({ unique: true, required: true, type: String })
  public name?: string;
}

export const GroupModel = getModelForClass(Group);
