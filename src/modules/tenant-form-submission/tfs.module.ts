import { TenantFormSubmissionResolver } from "@/modules/tenant-form-submission/tfs.resolver";
import { TenantFormSubmissionService } from "@/modules/tenant-form-submission/tfs.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [TenantFormSubmissionService, TenantFormSubmissionResolver],
})
export class TenantFormSubmissionModule {}
