import bcrypt from 'bcryptjs'
import { User } from '@/entities/user.entity'
import { MailProviderInterface } from '@/providers/mail-provider.interface'
import { UserRepositoryInterface } from '@/repositories/user-repository.interface'

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepositoryInterface,
        private mailProvider: MailProviderInterface
    ){}
    async execute (data: User) {
       const userSearched = await this.userRepository.findByEmail(data.email)
       
       if (userSearched){
           throw new Error("User already exists")
       }
        data.password = await bcrypt.hash(data.password, 8)
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