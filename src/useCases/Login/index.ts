import { globalRepository } from "..";
import { JwtTokenProvider } from "../../providers/implementations/JwtTokenProvider";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const tokenProvider = new JwtTokenProvider()

const loginUseCase = new LoginUseCase(globalRepository, tokenProvider)

const loginController = new LoginController(loginUseCase)

export { loginController }