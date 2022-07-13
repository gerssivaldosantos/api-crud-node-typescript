import { User } from "../../entities/User";
import { UserRepositoryInterface } from "../UserRepositoryInterface";
import pg from 'pg'
import { connect } from "../../databases/postgres/connect";

class PostgresUserRepository implements UserRepositoryInterface {
    constructor(private client?: pg.PoolClient) {
        if (!client) {
            connect().then(client => {
                this.client = client;
            }
            )
        }
    }

    async save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.client.query(`SELECT * FROM users WHERE email = '${email}'`);
        delete user.rows[0].password;
        return user.rows[0];
    }
    async customFindByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async update(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export { PostgresUserRepository };