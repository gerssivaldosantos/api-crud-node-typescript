import { User } from "../../../entities/User"
import { UserRepositoryInterface } from "../../../repositories/UserRepositoryInterface"



export class GetUserByIdUseCase{
    constructor( private userRepository: UserRepositoryInterface ){}

    async execute(id:string): Promise<User>{
        const user = await this.userRepository.findById(id)
        if (!user){
            throw new Error('User Not Found')
        }
        return user
    }
}