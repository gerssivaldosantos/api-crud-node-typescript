import { User } from "../../../entities/User"
import { UserRepositoryInterface } from "../../../repositories/UserRepositoryInterface"


export class UpdateUserUseCase {
    constructor(
        private userRepository: UserRepositoryInterface) { }

    async execute(data: User) {
        const userSearched = await this.userRepository.findById(data.id)

        if (!userSearched) {
            throw new Error("User not found")
        }
        await this.userRepository.update(data)
    }
}