import { User } from "../entities/user.entity";

export interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    customFindByEmail(email: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}