import { userRepository } from "../user.repository";
import { GetUserController } from "./get-user.controller";
import { GetUserUseCase } from "./get-user.service";

const getUserUseCase = new GetUserUseCase(userRepository)

const getUserController = new GetUserController(getUserUseCase)

export { getUserController }