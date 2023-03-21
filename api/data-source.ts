import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "./models/User";
import Equipment from "./models/Equipment";
import Address from "./models/Address";
import EquipmentCategory from "./models/EquipmentCategory";
import Report from "./models/Report";
import UserOwner from "./models/UserOwner";
import ReportVerification from "./models/ReportVerification";
import Gym from "./models/Gym";
import GymOwnership from "./models/GymOwnership";
console.log(process.env);
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, UserOwner, Equipment, Address, EquipmentCategory, Gym, GymOwnership, Report, ReportVerification],
    migrations: [],
    subscribers: [],
    legacySpatialSupport: false
})
