import * as jwt from "jsonwebtoken";

interface ITokenType {
  [key: string]: ({ username }: any, expiresIn: string) => any;
}

export const token: ITokenType = {
  generate: ({ username }: any, expiresIn: string): string => {
    return jwt.sign({ username }, process.env.JWT_SECRET_KEY!, { expiresIn });
  }
};
