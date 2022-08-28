import "reflect-metadata"
import { DataSource } from "typeorm"

import ormConfig from "./ormconfig"

const AppDataSource = new DataSource(ormConfig)
export {AppDataSource}