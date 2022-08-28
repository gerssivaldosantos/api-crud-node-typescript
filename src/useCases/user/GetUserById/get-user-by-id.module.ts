import { userRepository } from "../user.repository";
import { GetUserByIdController } from "./get-user-by-id.controller";
import { GetUserByIdUseCase } from "./get-user-by-id.service";

const getUserByIdUseCase = new GetUserByIdUseCase(userRepository)

const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController }