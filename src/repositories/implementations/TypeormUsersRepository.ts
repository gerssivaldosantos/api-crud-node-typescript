import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { UsersRepositoryInterface } from "../UsersRepositoryInterface";

export class TypeormUsersRepository implements UsersRepositoryInterface {
    constructor (private readonly usersRepository?: Repository<User>){
        if (!usersRepository) {
            this.usersRepository = getRepository(User);
        }
    }
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}