import { UsersRepositoryInterface } from "../../repositories/UsersRepositoryInterface";

export class CreateUserUseCase {
    
    private usersRepository: UsersRepositoryInterface

    constructor(
        usersRepository: UsersRepositoryInterface
    ){}
    async execute () {
        this.usersRepository = this.usersRepository
    }
}