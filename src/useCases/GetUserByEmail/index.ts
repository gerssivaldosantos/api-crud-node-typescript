import { TypeormUsersRepository } from "../../repositories/implementations/TypeormUsersRepository"
import { GetUserByEmailController } from "./GetUserByEmailController"
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase"

const typeormUsersRepository = new TypeormUsersRepository()

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    typeormUsersRepository
)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }