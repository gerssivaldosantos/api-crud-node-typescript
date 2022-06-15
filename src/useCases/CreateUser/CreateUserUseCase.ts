import { User } from "../../entities/User";
import { MailProviderInterface } from "../../providers/MailProviderInterface";
import { UserRepositoryInterface } from "../../repositories/UserRepositoryInterface";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepositoryInterface,
        private mailProvider: MailProviderInterface
    ){}
    async execute (data: CreateUserRequestDTO) {
       const userSearched = await this.userRepository.findByEmail(data.email)
       
       if (userSearched){
           throw new Error("User already exists")
       }
        const user = new User(data)
        await this.userRepository.save(user)

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Test',
                email: 'test@noemail.com'
            },
            subject: 'Welcome to my platform',
            body: `<p> click in this link to activate you account <a> venv-here </a> </p>`
        })
    }
}