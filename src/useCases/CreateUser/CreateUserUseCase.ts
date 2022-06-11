import { UsersRepositoryInterface } from "../../repositories/UsersRepositoryInterface";

export class CreateUserUseCase {
    constructor(
        private usersRepository: UsersRepositoryInterface
    ){}
    async execute () {
    }
}