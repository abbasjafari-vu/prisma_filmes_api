import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    const users = prisma.user.findMany({
      include: {
        movieRent: {
          select: {
            Movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return users;
  }
}
