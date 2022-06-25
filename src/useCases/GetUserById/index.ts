import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const userRepository = new TypeormUserRepository()

const getUserByIdUseCase = new GetUserByIdUseCase(userRepository)

const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController }