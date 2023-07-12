import { ICurrentUser } from "@/decorators";
import { CreateTenantFormDto } from "@/modules/tenant-form-submission/dtos/create-tenant-form.dto";
import { PrismaService } from "@/providers/database/prisma.service";
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class TenantFormSubmissionService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTenantFormSubmission(
    { duration_in_months, email, name, phone, surname }: CreateTenantFormDto,
    currentUser: ICurrentUser,
  ): Promise<string> {
    if (!currentUser) throw new UnauthorizedException();
    const senderProfile = await this.prismaService.profiles.findFirst({
      where: { user_id: currentUser.id, type: "LANDLORD" },
    });
    if (!senderProfile)
      throw new BadRequestException(
        "You do not have a landlord profile, create onw first",
      );
    await this.prismaService.tenant_form_submissions.create({
      data: {
        duration_in_months,
        email,
        name,
        phone,
        surname,
        from_profile_id: senderProfile.id,
      },
    });
    return "success";
  }
}
