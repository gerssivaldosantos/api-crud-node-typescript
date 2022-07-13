import { globalRepository } from ".."
import { GetUserByEmailController } from "./GetUserByEmailController"
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase"

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    globalRepository
)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }