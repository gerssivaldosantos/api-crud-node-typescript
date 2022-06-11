import { User } from "../../entities/User";
import { UsersRepositoryInterface } from "../../repositories/UsersRepositoryInterface";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: UsersRepositoryInterface
    ){}
    async execute (data: CreateUserRequestDTO) {
       const userSearched = await this.usersRepository.findByEmail(data.email)
       
       if (userSearched){
           throw new Error("User already exists")
       }
        const user = new User(data)
        await this.usersRepository.save(user)
    }
}