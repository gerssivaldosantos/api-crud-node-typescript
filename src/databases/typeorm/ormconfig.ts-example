import { DataSourceOptions } from "typeorm";

export default {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "mydb",
    password: "andows",
    database: "api",
    logging: true,
    synchronize: true,
    entities: [
        "src/entities/*.ts"
    ],
    subscribers: [
        "src/subscribers/*.ts"
    ],
    entitySchemas: [
        "src/schemas/*.json"
    ],
    migrations: [
        "src/databases/typeorm/migrations/*.ts"
    ],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/databases/typeorm/migrations",
        subscribersDir: "src/subscribers"
    }
} as DataSourceOptions