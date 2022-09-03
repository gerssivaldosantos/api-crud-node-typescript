import { User } from "@/entities/user.entity";
import { UserRepositoryInterface } from "@/repositories/user-repository.interface";
import pg from 'pg'
import { connect } from "@/databases/postgres/connect";

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
        const user = await this.client.query(`SELECT * FROM user WHERE id = '${id}'`);
        delete user.rows[0].password;
        return user.rows[0];
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.client.query(`SELECT * FROM user WHERE email = '${email}'`);
        delete user.rows[0].password;
        return user.rows[0];
    }
    async customFindByEmail(email: string): Promise<User> {
        const user = await this.client.query(`SELECT * FROM user WHERE email = '${email}'`);
        return user.rows[0];
    }
    async findAll(): Promise<User[]> {
        const user = await this.client.query(`SELECT * FROM user`);
        delete user.rows[0].password;
        return user.rows;
    }
    async update(user: User): Promise<void> {
        const { id, name, email, password } = user;
        await this.client.query(`UPDATE user SET name = '${name}', email = '${email}', password = '${password}' WHERE id = '${id}'`);
    }
    async delete(id: string): Promise<void> {
        await this.client.query(`DELETE FROM user WHERE id = '${id}'`);
    }

}

export { PostgresUserRepository };