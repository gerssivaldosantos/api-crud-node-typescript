import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository"
import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository"
import { GetUserByEmailController } from "./GetUserByEmailController"
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase"

// const repository = new TypeormUserRepository()

const repository = new PostgresUserRepository()

const getUserByEmailUseCase = new GetUserByEmailUseCase(
    repository
)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }