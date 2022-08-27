import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

import ormConfig from "./ormconfig"

const AppDataSource = new DataSource(ormConfig)
export {AppDataSource}