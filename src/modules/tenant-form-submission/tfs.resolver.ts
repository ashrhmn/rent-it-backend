import { CurrentUser, ICurrentUser } from "@/decorators";
import { CreateTenantFormDto } from "@/modules/tenant-form-submission/dtos/create-tenant-form.dto";
import { TenantFormSubmissionService } from "@/modules/tenant-form-submission/tfs.service";
import { Args, Mutation, Resolver } from "@nestjs/graphql";

@Resolver()
export class TenantFormSubmissionResolver {
  constructor(private readonly tfsService: TenantFormSubmissionService) {}

  @Mutation(() => String)
  createTenantFormSubmission(
    @Args("data") data: CreateTenantFormDto,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return this.tfsService.createTenantFormSubmission(data, currentUser);
  }
}
