import { LoginDTO } from "./login.dto";
import bcrypt from 'bcryptjs'
import { TokenProviderInterface } from "@/providers/token-provider.interface";
import { UserRepositoryInterface } from "@/repositories/user-repository.interface";

export class LoginUseCase {

    constructor(
        private readonly UserRepository: UserRepositoryInterface,
        private readonly TokenProvider: TokenProviderInterface
    ) { }

    public async execute(login: LoginDTO) {
        try {
            const userSearched = await this.UserRepository.customFindByEmail(login.email)
            const passwordValid = await bcrypt.compare(login.password, userSearched.password)
            if (!passwordValid) {
                throw new Error('Invalid credentials')
            }
            return this.TokenProvider.create(userSearched.id)

        } catch (error) {
            throw new Error(error.message || 'Unexpected Error')
        }
    }
}