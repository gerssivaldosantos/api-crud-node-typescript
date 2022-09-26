import { MailtrapMailProvider } from "@/providers/implementations/mailtrap-provider";
import { userRepository } from "../user.repository";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "./create-user.service";

const mailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }