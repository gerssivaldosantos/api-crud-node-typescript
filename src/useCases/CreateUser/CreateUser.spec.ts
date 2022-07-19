import { createUserUseCase } from ".";
import { User } from "../../entities/User";
import { AppDataSource } from "../../databases/typeorm/data-source";
import { faker } from "@faker-js/faker";

beforeAll(async () => {
    await AppDataSource.initialize();
});

describe("CreateUserUseCase", () => {
    it("should be able to create a new user", () => {
        const user = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password: "123456",
        } as User;
        createUserUseCase.execute(user).then((user) => {
            expect(user).toBeDefined();
        });
    });
});

afterAll(async () => {
    await AppDataSource.destroy();
});
