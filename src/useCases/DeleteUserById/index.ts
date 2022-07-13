import { globalRepository } from "..";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const deleteUserUseCase = new DeleteUserUseCase(globalRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };