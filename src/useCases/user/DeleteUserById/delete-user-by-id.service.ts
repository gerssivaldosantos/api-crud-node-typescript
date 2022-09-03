import { UserRepositoryInterface } from "@/repositories/user-repository.interface";

export class DeleteUserUseCase {
    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) {}

    public async execute(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}