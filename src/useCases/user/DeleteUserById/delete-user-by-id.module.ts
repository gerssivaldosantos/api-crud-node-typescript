import { userRepository } from "../user.repository";
import { DeleteUserController } from "./delete-user-by-id.controller";
import { DeleteUserUseCase } from "./delete-user-by-id.service";

const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };