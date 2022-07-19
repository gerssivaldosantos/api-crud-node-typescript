import  app  from "./app"
import { AppDataSource } from "./databases/typeorm/data-source"
AppDataSource.initialize().then( () => {
    app.listen(process.env.PORT, () => console.log(`listen on port ${process.env.PORT}`))
} )
