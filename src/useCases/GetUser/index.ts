import  TypeormUserRepository  from "../../repositories/implementations/TypeormUserRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const getUserUseCase = new GetUserUseCase( TypeormUserRepository )

const getUserController = new GetUserController( getUserUseCase )

export { getUserController }