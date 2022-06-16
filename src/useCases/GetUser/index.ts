import { TypeormUserRepository }  from "../../repositories/implementations/TypeormUserRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const typeormUserRepository = new TypeormUserRepository()

const getUserUseCase = new GetUserUseCase( typeormUserRepository )

const getUserController = new GetUserController( getUserUseCase )

export { getUserController }