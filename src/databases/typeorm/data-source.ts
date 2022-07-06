import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

import ormConfig from "../../../ormconfig.json"

const AppDataSource = new DataSource(ormConfig as DataSourceOptions)
AppDataSource.initialize()
export {AppDataSource}