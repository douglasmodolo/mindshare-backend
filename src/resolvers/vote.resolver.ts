import { Service } from "typedi";
import { VoteModel } from "../models/vote.model.js";
import { Arg, FieldResolver, Mutation, Resolver, Root } from "type-graphql";
import { User } from "../generated/browser.js";
import { GraphqlUser } from "../graphql/decorators/user.decorator.js";
import { VoteService } from "../services/vote.service.js";
import { IdeaModel } from "../models/idea.model.js";
import { IdeaService } from "../services/idea.service.js";
import { UserModel } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";

@Service()
@Resolver(() => VoteModel)
export class VoteResolver {
    private voteService = new VoteService();
    private ideaService = new IdeaService();
    private userService = new UserService();

    @Mutation(() => Boolean)
    async toggleVote(
        @GraphqlUser() user: User,
        @Arg('ideaId', () => String) ideaId: string
    ) : Promise<boolean> {
        return this.voteService.toggleVote(user.id, ideaId);
    }

    @FieldResolver(() => [IdeaModel])
    async idea(@Root() vote: VoteModel): Promise<IdeaModel> {
        return this.ideaService.findIdeaById(vote.ideaId);
    }

    @FieldResolver(() => [UserModel])
    async user(@Root() vote: VoteModel): Promise<UserModel> {
        return this.userService.findUser(vote.userId);
    }
}