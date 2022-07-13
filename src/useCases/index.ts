import { TypeormUserRepository } from "../repositories/implementations/TypeormUserRepository";

const globalRepository = new TypeormUserRepository()

export { globalRepository }