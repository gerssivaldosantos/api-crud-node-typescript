import { User } from "../../entities/User";
import { AppDataSource } from "../../databases/typeorm/data-source";
import { faker } from "@faker-js/faker";
import app from "../../app";
import request from 'supertest'

beforeAll(async () => {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations()
});

describe("CreateUserUseCase", () => {
    it("should be able to create a new user", async () => {
        const user = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password: "123456",
        } as User;
        const userResponse = await request(app).post("/user").send(user)
        const { statusCode, body } = userResponse;
        expect(statusCode).toEqual(201)
        expect(body).toHaveProperty('message')
        expect(body.message).toEqual('User Created')
    });
});

afterAll( done => {
    AppDataSource.destroy().then(() => done());
});
