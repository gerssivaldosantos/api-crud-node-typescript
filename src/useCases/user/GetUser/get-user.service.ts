import { User } from "@/entities/user.entity";
import { UserRepositoryInterface } from "@/repositories/user-repository.interface";


export class GetUserUseCase {
    constructor(private readonly userRepository: UserRepositoryInterface) { }

    public async execute(): Promise<User[]> {
        try {
            return this.userRepository.findAll();
        } catch (error) {
            throw new Error("Unexpected Error");
        }
    }
}