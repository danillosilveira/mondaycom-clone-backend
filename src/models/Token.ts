import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Token {
  @Field({ nullable: false })
  token: string;
}
