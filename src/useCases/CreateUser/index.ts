import { globalRepository } from "..";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    globalRepository,
    mailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }