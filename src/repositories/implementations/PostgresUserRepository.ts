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
        const user = await this.client.query(`SELECT * FROM users WHERE id = '${id}'`);
        delete user.rows[0].password;
        return user.rows[0];
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.client.query(`SELECT * FROM users WHERE email = '${email}'`);
        delete user.rows[0].password;
        return user.rows[0];
    }
    async customFindByEmail(email: string): Promise<User> {
        const user = await this.client.query(`SELECT * FROM users WHERE email = '${email}'`);
        return user.rows[0];
    }
    async findAll(): Promise<User[]> {
        const users = await this.client.query(`SELECT * FROM users`);
        delete users.rows[0].password;
        return users.rows;
    }
    async update(user: User): Promise<void> {
        const { id, name, email, password } = user;
        await this.client.query(`UPDATE users SET name = '${name}', email = '${email}', password = '${password}' WHERE id = '${id}'`);
    }
    async delete(id: string): Promise<void> {
        await this.client.query(`DELETE FROM users WHERE id = '${id}'`);
    }

}

export { PostgresUserRepository };