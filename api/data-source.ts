import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./User"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "gymcheck-rds-db.c326kshsg1xs.eu-west-2.rds.amazonaws.com",
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
