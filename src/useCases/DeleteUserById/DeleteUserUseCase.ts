import { UserRepositoryInterface } from "../../repositories/UserRepositoryInterface";


export class DeleteUserUseCase {
    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) {}

    public async execute(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}