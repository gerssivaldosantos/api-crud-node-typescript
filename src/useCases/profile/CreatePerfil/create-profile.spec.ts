import { faker } from "@faker-js/faker";
import request from 'supertest'
import app from "@/app";
import { AppDataSource } from "@/databases/typeorm/data-source";
import { Profile } from "@/entities/profile.entity";

beforeAll(async () => {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations()
} )

describe("Create profile", () => {
    it('Should be able to create a new profile with success', async () => {
        const profile = new Profile({
            name: faker.name.jobType(),
            description: faker.name.jobDescriptor(),
        })
        const response = await request(app).post('/profile').send(profile)
        const { statusCode, body } = response
        expect(statusCode).toEqual(201)
        expect(body).toHaveProperty('message')
        expect(body.message).toEqual('Profile Created')
    })
})

afterAll( done => {
    AppDataSource.destroy().then(() => done());
})