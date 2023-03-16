"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "database-gymcheck.cmfs0v3hx9mm.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "password1",
    database: "gymcheck",
    synchronize: true,
    logging: true,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map