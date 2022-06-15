import { GetUserDTO } from "../../generic/dtos/GetUserDTO";
import { UserRepositoryInterface } from "../../repositories/UserRepositoryInterface";


export class GetUserByEmailUseCase {
    constructor(private readonly userRepository: UserRepositoryInterface) {}

    public async execute(email: string): Promise<GetUserDTO> {
        try {
            return this.userRepository.findByEmail(email);

        }
        catch (error) {
            throw new Error("User not found");
        }
    }
}