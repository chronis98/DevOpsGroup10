import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "database-gymcheck.cmfs0v3hx9mm.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "password1",
    database: "gymcheck",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
