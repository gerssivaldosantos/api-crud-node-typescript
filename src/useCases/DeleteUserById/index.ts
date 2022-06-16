import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const typeormUserRepository = new TypeormUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(typeormUserRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };