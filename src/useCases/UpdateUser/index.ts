import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const repository = new TypeormUserRepository()

const updateByEmailUseCase = new UpdateUserUseCase(repository)

const updateUserController = new UpdateUserController(updateByEmailUseCase)

export { updateUserController }