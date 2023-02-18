import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createuserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllusers/getAllUsersControllers";

const createUserControler = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const userRoutes = Router();

userRoutes.get("/", getAllUsersController.handle);
userRoutes.post("/", createUserControler.handle);

export { userRoutes };
