import { Router } from "express";
import { CreateMovieControler } from "../modules/movies/useCases/createMovie/createMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovierent/createMoviRentController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMoviesByReleaseDate/getMovieUseCaseByReleaseDateController";

const movieRoutes = Router();

const createMovieController = new CreateMovieControler();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
