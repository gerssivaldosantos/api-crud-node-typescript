import "reflect-metadata"
import { DataSource } from "typeorm"

import ormConfig from "./ormconfig"

const AppDataSource = new DataSource(ormConfig)

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected")
    })
    .catch((error) => console.log(error))

export {AppDataSource}