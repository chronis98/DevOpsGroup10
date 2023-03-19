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

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "gymcheck",
    synchronize: true,
    logging: true,
    entities: [User, UserOwner, Equipment, Address, EquipmentCategory, Gym, GymOwnership, Report, ReportVerification],
    migrations: [],
    subscribers: [],
})
