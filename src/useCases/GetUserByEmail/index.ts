import TypeormUserRepository  from "../../repositories/implementations/TypeormUserRepository"
import { GetUserByEmailController } from "./GetUserByEmailController"
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase"

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    TypeormUserRepository
)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }