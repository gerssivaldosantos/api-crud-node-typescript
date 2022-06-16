import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import  { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()

const typeormUserRepository = new TypeormUserRepository()

const createUserUseCase = new CreateUserUseCase(
    typeormUserRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }