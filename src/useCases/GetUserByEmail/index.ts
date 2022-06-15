import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository"
import { GetUserByEmailController } from "./GetUserByEmailController"
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase"

const typeormUserRepository = new TypeormUserRepository()

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    typeormUserRepository
)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }