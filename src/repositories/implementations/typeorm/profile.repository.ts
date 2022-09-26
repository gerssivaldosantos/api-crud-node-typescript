import {  Repository } from "typeorm";
import { AppDataSource } from "@/databases/typeorm/data-source";
import { User } from "@/entities/user.entity";
import { UserRepositoryInterface } from "@/repositories/user-repository.interface";

class TypeormUserRepository implements UserRepositoryInterface {
    constructor (private readonly userRepository?: Repository<User>){
        if (!userRepository) {
            this.userRepository = AppDataSource.getRepository(User);
        }
    }
    async save(user: User): Promise<void> {
        try {
            await this.userRepository.save(user);
        } catch (error) {
            throw new Error(error.message || "Error saving user");
        }
    }
    async findById(id: string): Promise<User> {
        return this.userRepository.findOne({where: {id}});
    }
    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({where: {email}});
    }

    async customFindByEmail(email: string): Promise<User> {
        const user = await this.userRepository.
        createQueryBuilder('user').
        select().
        addSelect("user.password").
        where("user.email = :email", { email }).
        getOne();
        return user;
    }
    
    async findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async update(user: User): Promise<void> {
        const userSearched = await this.userRepository.findOne({where: {id: user.id}});
        if (!userSearched) {
            throw new Error("User not found");
        }
        await this.userRepository.update(user.id, user);

    }
    async  delete(id: string): Promise<void> {
        const userSearched = await this.userRepository.findOne({where: {id}});
        if (!userSearched) {
            throw new Error("User not found");
        }
        await this.userRepository.delete(id);
    }
}

export { TypeormUserRepository };