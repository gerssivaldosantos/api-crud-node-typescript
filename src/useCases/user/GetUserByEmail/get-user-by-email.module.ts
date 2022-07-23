import { userRepository } from "../user.repository"
import { GetUserByEmailController } from "./get-user-by-email.controller"
import { GetUserByEmailUseCase } from "./get-user-by-email.service"

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    userRepository
)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }