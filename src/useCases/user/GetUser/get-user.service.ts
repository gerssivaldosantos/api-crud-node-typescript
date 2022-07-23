import { User } from "../../../entities/User";
import { UserRepositoryInterface } from "../../../repositories/UserRepositoryInterface";


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