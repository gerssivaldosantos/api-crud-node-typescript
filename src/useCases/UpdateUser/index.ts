import { globalRepository } from "..";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const updateByEmailUseCase = new UpdateUserUseCase(globalRepository)

const updateUserController = new UpdateUserController(updateByEmailUseCase)

export { updateUserController }