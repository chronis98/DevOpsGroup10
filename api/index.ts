import express, {Express, Request, Response} from 'express';
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import dotenv from 'dotenv';
import {Equipment} from "./models/Equipment";
import {Gym} from "./models/Gym";
import cors from "cors";

dotenv.config();

AppDataSource.initialize()
    .then(() => {

      const app = express();

      app.use(cors());

      const port = process.env.PORT;

      app.get('/api/equipment', async (req: Request, res: Response) => {
        const equipments = await AppDataSource.manager.find(Equipment, {
          relations: ['category']
        });
        const equipmentPresentables = equipments.map(async equipment => ({
          id: equipment.id,
          name: equipment.name,
          description: equipment.description,
          imagePath: equipment.imagePath,
          category: await equipment.category
        }));
        const result = await Promise.all(equipmentPresentables);
        res.json(result);
      });

      app.get('/api/gym', cors(), async (req: Request, res: Response) => {
        const gyms = await AppDataSource.manager.find(Gym, {
          relations: ['address']
        });
        const gymPresentables = gyms.map(async gym => ({
          id: gym.id,
          name: gym.name,
          imagePath: gym.imagePath,
          address: await gym.address
        }));
        const result = await Promise.all(gymPresentables);
        res.json(result);
      });

      app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      });

    })
    .catch(error => console.log(error))
