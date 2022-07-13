import { globalRepository } from "..";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const getUserUseCase = new GetUserUseCase(globalRepository)

const getUserController = new GetUserController(getUserUseCase)

export { getUserController }