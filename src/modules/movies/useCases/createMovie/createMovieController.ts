import { CreateMovieUseCase } from "./createMovieUseCase";
import { Request, Response } from "express";

export class CreateMovieControler {
  async handle(req: Request, res: Response) {
    const { title, duration, releaseDate } = req.body;

    const createMovieUseCase = new CreateMovieUseCase();

    const result = await createMovieUseCase.execute({
      title,
      duration,
      releaseDate,
    });

    return res.status(201).json(result);
  }
}
