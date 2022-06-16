import { User } from "../entities/User";

export interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}