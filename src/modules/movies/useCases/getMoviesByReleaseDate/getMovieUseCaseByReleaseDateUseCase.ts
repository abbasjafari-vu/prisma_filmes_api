import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMoviesByReleaseDateUseCase {
  async execute(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        releaseDate: "desc",
      },
      include: {
        movieRent: {
          select: {
            User: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return movies;
  }
}
