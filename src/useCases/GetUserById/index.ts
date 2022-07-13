import { globalRepository } from "..";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const getUserByIdUseCase = new GetUserByIdUseCase(globalRepository)

const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController }