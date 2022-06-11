import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { TypeormUsersRepository } from "../../repositories/implementations/TypeormUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const typeormUsersRepository = new TypeormUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    typeormUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }