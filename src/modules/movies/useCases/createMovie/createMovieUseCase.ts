import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/createMovieDTO";

export class CreateMovieUseCase {
  async execute({ title, duration, releaseDate }: CreateMovieDTO) {
    const movieALreadyExists = await prisma.movie.findUnique({
      where: { title },
    });

    if (movieALreadyExists) {
      throw new AppError("Movie Already Exists");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        releaseDate,
      },
    });

    return movie;
  }
}
