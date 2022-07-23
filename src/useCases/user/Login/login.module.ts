import { JwtTokenProvider } from "../../../providers/implementations/JwtTokenProvider";
import { userRepository } from "../user.repository";
import { LoginController } from "./login.controller";
import { LoginUseCase } from "./login.service";

const tokenProvider = new JwtTokenProvider()

const loginUseCase = new LoginUseCase(userRepository, tokenProvider)

const loginController = new LoginController(loginUseCase)

export { loginController }