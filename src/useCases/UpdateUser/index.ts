import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const typeormUserRepository = new TypeormUserRepository()

const updateByEmailUseCase = new UpdateUserUseCase(typeormUserRepository)

const updateUserController = new UpdateUserController(updateByEmailUseCase)

export { updateUserController }