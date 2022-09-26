import { TypeormUserRepository } from "@/repositories/implementations/typeorm/profile.repository";

const userRepository = new TypeormUserRepository()

export { userRepository }