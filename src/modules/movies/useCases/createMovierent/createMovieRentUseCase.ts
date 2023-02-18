import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/createMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ userId, movieId }: CreateMovieRentDTO): Promise<void> {
    const movieExists = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists");
    }

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: { movieId },
    });

    if (movieAlreadyRented) {
      throw new AppError("Movie Already rented");
    }

    const userExists = await prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) throw new AppError("User Not Exists");

    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
