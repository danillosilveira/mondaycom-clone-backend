import "reflect-metadata";
import { LoginInput } from "./login/LoginInput";
import { UserModel, User, LoginReturnType } from "./../../models/User";
import { Resolver, Mutation, Arg } from "type-graphql";
import { ReturnType } from "./login/LoginReturnType";
import * as bcrypt from "bcrypt";

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginReturnType, { nullable: true })
  async login(
    @Arg("data")
    { email, password }: LoginInput
  ): Promise<ReturnType> {
    const user: User | null = await UserModel.findOne({ email });

    if (!user) {
      return {
        user: null!,
        errorMessage: "User does not exists."
      };
    }

    const validPassword: boolean = await bcrypt.compare(
      password,
      user.password!
    );

    if (!validPassword) {
      return {
        user: null!,
        errorMessage: "Password does not match."
      };
    }

    return {
      user,
      errorMessage: "No error."
    };
  }
}
