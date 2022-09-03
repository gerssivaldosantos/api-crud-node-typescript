import { GetUserDTO } from "@/generic/dtos/get-user.dto";
import { UserRepositoryInterface } from "@/repositories/user-repository.interface";


export class GetUserByEmailUseCase {
    constructor(private readonly userRepository: UserRepositoryInterface) {}

    public async execute(email: string): Promise<GetUserDTO> {
        try {
            const user = await this.userRepository.findByEmail(email) as GetUserDTO;
            return user;
        }
        catch (error) {
            throw new Error("User not found");
        }
    }
}