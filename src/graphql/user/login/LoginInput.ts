import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class LoginInput {
  @Field()
  @Length(1, 255)
  username: string;

  @Field()
  password: string;
}
