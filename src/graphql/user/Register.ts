import { RegisterInput } from "./register/RegisterInput";
import { UserModel, User, RegisterReturnType } from "./../../models/User";
import { Resolver, Mutation, Arg } from "type-graphql";
import { ReturnType } from "./register/RegisterReturnType";
import * as bcrypt from "bcrypt";
import { token } from "../../helpers/token";

@Resolver()
export class RegisterResolver {
  @Mutation(() => RegisterReturnType, { nullable: true })
  async register(
    @Arg("data")
    { fullName, email, password, teamName }: RegisterInput
  ): Promise<ReturnType> {
    const userEmail: User | null = await UserModel.findOne({ email });

    if (userEmail) {
      return {
        token: {
          token: null!
        },
        errorMessage: "User already exists"
      };
    }

    const hashedPassword: string = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
      fullName,
      email,
      password: hashedPassword,
      teamName,
      createdAt: Date.now()
    });

    return {
      token: {
        token: token.generate(newUser, "12h")
      },
      errorMessage: "No error."
    };
  }
}
