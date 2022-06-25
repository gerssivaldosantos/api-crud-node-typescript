import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import  { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailProvider = new MailtrapMailProvider()

const repository = new TypeormUserRepository()

const createUserUseCase = new CreateUserUseCase(
    repository,
    mailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }