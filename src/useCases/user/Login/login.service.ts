import { LoginDTO } from "./login.dto";
import bcrypt from 'bcryptjs'
import { TokenProviderInterface } from "@/providers/token-provider.interface";
import { UserRepositoryInterface } from "@/repositories/user-repository.interface";
import {User} from "@/entities/user.entity";

export class LoginUseCase {

    constructor(
        private readonly UserRepository: UserRepositoryInterface,
        private readonly TokenProvider: TokenProviderInterface
    ) { }

    public async execute(login: LoginDTO) {
        try {
            const userSearched:User | undefined = await this.UserRepository.customFindByEmail(login.email)
            if (userSearched instanceof User) {
                const passwordValid = await bcrypt.compare(login.password, userSearched.password)
                if (!passwordValid) {
                    new Error('Invalid credentials')
                }
            }
            if (!userSearched?.id) new Error('User Not Found')
            else {
                const token = await this.TokenProvider.create(userSearched.id)
                return {
                    token,
                    user: {...userSearched, password: null}
                }
            }
        } catch (error) {
            throw new Error(error.message || 'Unexpected Error')
        }
    }
}
