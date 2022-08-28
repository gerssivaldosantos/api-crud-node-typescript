import { UpdateUserController } from "./update-user-by-id.controller";
import { UpdateUserUseCase } from "./upate-user-by-id.service";
import { userRepository } from "../user.repository";

const updateByEmailUseCase = new UpdateUserUseCase(userRepository)

const updateUserController = new UpdateUserController(updateByEmailUseCase)

export { updateUserController }