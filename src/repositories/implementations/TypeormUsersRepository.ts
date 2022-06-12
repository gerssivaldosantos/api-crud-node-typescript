import {  Repository } from "typeorm";
import { AppDataSource } from "../../databases/typeorm/data-source";
import { User } from "../../entities/User";
import { UsersRepositoryInterface } from "../UsersRepositoryInterface";

export class TypeormUsersRepository implements UsersRepositoryInterface {
    constructor (private readonly usersRepository?: Repository<User>){
        if (!usersRepository) {
            this.usersRepository = AppDataSource.getRepository(User);
        }
    }
    async save(user: User): Promise<void> {
        try {
            await this.usersRepository.save(user);
        } catch (error) {
            throw new Error(error.message || "Error saving user");
        }
    }
    async findById(id: string): Promise<User> {
        return this.usersRepository.findOne({where: {id}});
    }
    async findByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({where: {email}});
    }
    async findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async  delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}