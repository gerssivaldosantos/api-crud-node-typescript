import { UserRepositoryInterface } from "../../repositories/UserRepositoryInterface";
import { LoginDTO } from "./LoginDTO";
import bcrypt from 'bcryptjs'
import { TokenProviderInterface } from "../../providers/TokenProviderInterface";

export class LoginUseCase {

    constructor(
        private readonly UserRepository: UserRepositoryInterface,
        private readonly TokenProvider: TokenProviderInterface
    ) { }

    public async execute(login: LoginDTO) {
        try {
            const userSearched = await this.UserRepository.findByEmail(login.email)
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