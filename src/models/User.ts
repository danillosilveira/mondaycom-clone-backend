import { Token } from "./Token";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  public id: any;

  @Field()
  @prop({ required: true, type: String })
  public name?: string;

  @Field()
  @prop({ required: true, type: String })
  public surname?: string;

  @Field()
  @prop({ unique: true, required: true, type: String })
  public username?: string;

  @Field()
  @prop({ unique: true, required: true, type: String })
  public email?: string;

  @prop({ required: true, type: String, minlength: 6 })
  public password?: string;

  @Field()
  @prop({ default: Date.now(), type: Date })
  public createdAt?: Date;
}

@ObjectType()
export class RegisterReturnType {
  @Field({ nullable: true })
  token: Token;

  @Field()
  errorMessage: string;
}

export const UserModel = getModelForClass(User);
