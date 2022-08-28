import 'reflect-metadata'
import express from "express"
import cors from "cors"
import { Express } from 'express-serve-static-core'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './docs/swagger.json'
import { router } from './routes'
import dotenv from 'dotenv';
dotenv.config();

class MyApp {
    app:Express;
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
        this.app.use('/api/v1/', router)
    }
}

export default new MyApp().app;