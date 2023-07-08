import { ICurrentUser } from "@/decorators";
import { review_category } from "@/generated/dtos";
import { CreateReviewDto } from "@/modules/review/dtos/create-review.dto";
import { PrismaService } from "@/providers/database/prisma.service";
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class ReviewService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllReviewsByProfileId(profile_id: string) {
    return await this.prismaService.profiles.findMany({
      where: { sent_reviews: { some: { received_by_profile_id: profile_id } } },
      select: {
        sent_reviews: { where: { received_by_profile_id: profile_id } },
        id: true,
        name: true,
      },
    });
  }

  async getReviewsOnProfileByLoggedInUser(
    profile_id: string,
    user: ICurrentUser,
    select,
  ) {
    if (!user) throw new UnauthorizedException();

    const profile = await this.prismaService.profiles.findFirst({
      where: { id: profile_id },
    });

    if (!profile) throw new Error(`Profile not found with id ${profile_id}`);

    return await this.prismaService.reviews.findMany({
      where: {
        received_by_profile_id: profile_id,
        sent_by_profile: {
          user_id: user.id,
          type: profile.type === "LANDLORD" ? "TENANT" : "LANDLORD",
        },
      },
      ...select,
    });
  }

  getReviewCategories(): review_category[] {
    return Object.values(review_category);
  }

  async createReview(
    { category, stars, comment, profile_id }: CreateReviewDto,
    currentUser: ICurrentUser,
  ): Promise<string> {
    if (!currentUser) throw new UnauthorizedException();
    if (stars !== undefined && (stars < 1 || stars > 5))
      throw new BadRequestException(`Stars must be between 1 and 5`);
    const receiverProfile = await this.prismaService.profiles.findFirst({
      where: { id: profile_id },
    });
    if (!receiverProfile)
      throw new BadRequestException(`Profile not found with id ${profile_id}`);

    const currentUserProfile = await this.prismaService.profiles.findFirst({
      where: { user_id: currentUser.id, type: { not: receiverProfile.type } },
    });
    if (!currentUserProfile)
      throw new BadRequestException(
        `To rate a profile of type ${receiverProfile.type}, you must have a profile other than ${receiverProfile.type}`,
      );
    await this.prismaService.reviews.upsert({
      create: {
        category,
        stars,
        comment,
        sent_by_profile_id: currentUserProfile.id,
        received_by_profile_id: receiverProfile.id,
      },
      update: {
        category,
        stars,
        comment,
        sent_by_profile_id: currentUserProfile.id,
        received_by_profile_id: receiverProfile.id,
      },
      where: {
        sent_by_profile_id_received_by_profile_id_category: {
          category,
          sent_by_profile_id: currentUserProfile.id,
          received_by_profile_id: receiverProfile.id,
        },
      },
    });
    return "success";
  }
}
