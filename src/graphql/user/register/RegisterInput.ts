import { InputType, Field } from "type-graphql";
import { Length, MinLength } from "class-validator";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255, { message: "Length must be 1-255" })
  fullName: string;

  @Field()
  email: string;

  @Field()
  @MinLength(8)
  password: string;

  @Field()
  teamName: string;
}
