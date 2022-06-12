import { GetUserDTO } from "../../generic/dtos/GetUserDTO";
import { UsersRepositoryInterface } from "../../repositories/UsersRepositoryInterface";


export class GetUserByEmailUseCase {
    constructor(private readonly usersRepository: UsersRepositoryInterface) {}

    public async execute(email: string): Promise<GetUserDTO> {
        try {
            return this.usersRepository.findByEmail(email);

        }
        catch (error) {
            throw new Error("User not found");
        }
    }
}