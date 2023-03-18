import express, {Express, Request, Response} from 'express';
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import dotenv from 'dotenv';
import {Equipment} from "./models/Equipment";

dotenv.config();

AppDataSource.initialize()
    .then(async () => {

      const app: Express = express();

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
        res.send(result);
      });

      app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      });

    })
    .catch(error => console.log(error));
