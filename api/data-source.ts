import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"
import {Equipment} from "./models/Equipment";
import {Address} from "./models/Address";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "gymcheck",
    synchronize: true,
    logging: true,
    entities: [User, Equipment, Address],
    migrations: [],
    subscribers: [],
})
