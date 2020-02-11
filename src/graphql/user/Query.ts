import { Query, Resolver, Arg } from "type-graphql";

@Resolver()
export class QueryResolver {
  @Query(() => String, { nullable: false })
  async hello(@Arg("name") name: string): Promise<string> {
    return `Hello ${name}`;
  }
}
