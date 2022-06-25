import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const repository = new TypeormUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(repository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };