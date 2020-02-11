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
    { name, surname, username, email, password }: RegisterInput
  ): Promise<ReturnType> {
    const userBoth: User | null = await UserModel.findOne({ email, username });
    const userEmail: User | null = await UserModel.findOne({ email });
    const userUsername: User | null = await UserModel.findOne({ username });

    if (userBoth) {
      return {
        token: {
          token: null!
        },
        errorMessage: "User already exists"
      };
    }

    if (userEmail) {
      return {
        token: {
          token: null!
        },
        errorMessage: "Email already used."
      };
    }

    if (userUsername) {
      return {
        token: {
          token: null!
        },
        errorMessage: "Username already exists"
      };
    }

    const hashedPassword: string = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
      name,
      surname,
      username,
      email,
      password: hashedPassword,
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
