import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const repository = new TypeormUserRepository()

const getUserByIdUseCase = new GetUserByIdUseCase(repository)

const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController }