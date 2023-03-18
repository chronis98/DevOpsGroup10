import { Express, Request, Response } from 'express';
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import {User} from "./models/User";
import dotenv from 'dotenv';
import express from 'express';
import {Equipment} from "./models/Equipment";
import {Address} from "./models/Address";
import {DeepPartial} from "typeorm";

dotenv.config();

AppDataSource.initialize()
    .then(async () => {

      console.log(await AppDataSource.manager.find(Address));
      console.log(await AppDataSource.getRepository(Address).create({
        number: 306,
        addition: undefined,
        coords: {
          lat: 50,
          long: 40
        }
      }).save())
      console.log(await AppDataSource.manager.find(Address));

      const app: Express = express();

      const port = process.env.PORT;

      app.get('/api/equipment', async (req: Request, res: Response) => {
        res.send(await AppDataSource.manager.find(Equipment));
      });

      app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      });

    })
    .catch(error => console.log(error));
