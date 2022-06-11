import { User } from "../../entities/User";
import { MailProviderInterface } from "../../providers/MailProviderInterface";
import { UsersRepositoryInterface } from "../../repositories/UsersRepositoryInterface";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: UsersRepositoryInterface,
        private mailProvider: MailProviderInterface
    ){}
    async execute (data: CreateUserRequestDTO) {
       const userSearched = await this.usersRepository.findByEmail(data.email)
       
       if (userSearched){
           throw new Error("User already exists")
       }
        const user = new User(data)
        await this.usersRepository.save(user)

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