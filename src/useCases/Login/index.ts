import { JwtTokenProvider } from "../../providers/implementations/JwtTokenProvider";
import { TypeormUserRepository } from "../../repositories/implementations/TypeormUserRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const tokenProvider = new JwtTokenProvider()

const repository = new TypeormUserRepository()

const loginUseCase = new LoginUseCase(repository, tokenProvider)

const loginController = new LoginController(loginUseCase)

export { loginController }