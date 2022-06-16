import TypeormUserRepository from "../../repositories/implementations/TypeormUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const deleteUserUseCase = new DeleteUserUseCase(TypeormUserRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };