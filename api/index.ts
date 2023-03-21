import express, {Request, Response} from 'express';
import "reflect-metadata"
import dotenv from 'dotenv';
import cors from "cors";
import Equipment from "./models/Equipment";
import Report from "./models/Report";
import Gym from "./models/Gym";

dotenv.config();

import {AppDataSource} from "./data-source";
import User from "./models/User";
import bodyParser from "body-parser";

AppDataSource.initialize()
    .then(async () => {

      const app = express();

      app.use(bodyParser.json());
      app.use(cors());

      const port = process.env.API_PORT;

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

      app.get('/api/gym', async (req: Request, res: Response) => {
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

      app.get('/api/user', async (req: Request, res: Response) => {
        const users = await AppDataSource.manager.find(User);
        const userPresentables = users.map(user => ({
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt
        }));
        res.json(userPresentables);
      });

      app.get('/api/user/:id', async (req: Request<Record<'id', number>>, res: Response) => {
        const existingUser = await AppDataSource.manager.findOne(User, {
          where: {id: req.params.id}
        });

        if (existingUser === null) {
          return res.status(404).send();
        }

        const responseUser = {
          id: existingUser.id,
          username: existingUser.username,
          email: existingUser.email,
          createdAt: existingUser.createdAt
        }
        res.json(responseUser);
      });

      app.post('/api/user', async (req: Request<Object, Object, { username: string, email: string, password: string }>, res: Response) => {
        const existingUser = await AppDataSource.manager.findOne(User, {
          where: [{
            username: req.body.username
          }, {
            email: req.body.email
          }]
        });

        if (existingUser) {
          return res.status(409).send();
        }

        const newUser = await AppDataSource.manager.create(User, {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          createdAt: new Date()
        }).save();

        res.status(201).json({
          id: newUser.id,
          username: newUser.username,
          email: newUser.email
        });
      });

      app.put('/api/user/:id', async (req: Request<Record<'id', number>, Object, { username: string, email: string, password: string }>, res: Response) => {
        const existingUser = await AppDataSource.manager.findOne(User, {
          where: {
            id: req.params.id
          }
        });

        if (!existingUser) {
          return res.status(404).send();
        }

        existingUser.username = req.body.username;
        existingUser.email = req.body.email;
        existingUser.save();

        res.status(200).json({
          id: existingUser.id,
          username: existingUser.username,
          email: existingUser.email
        });
      });

      app.delete('/api/user/:id', async (req: Request<Record<'id', number>, Object, Object>, res: Response) => {
        const existingUser = await AppDataSource.manager.findOne(User, {
          where: {
            id: req.params.id
          }
        });

        if (!existingUser) {
          return res.status(403).send();
        }

        existingUser.remove();
        res.status(204).json();
      });

      app.get('/api/gym/:gymId/equipment/:equipmentId', async (req: Request<Record<'gymId' | 'equipmentId', string>>, res: Response) => {
        const equipmentPromise = Equipment.findOne({
          relations: {
            category: true
          },
          where: {
            id: 1
          }
        });

        const reportsPromise = Report.find({
          join: {
            alias: 'report',
            leftJoinAndSelect: {
              user: 'report.user',
              verifications: 'report.verifications'
            }
          },
          where: {
            equipmentId: parseInt(req.params.equipmentId),
            gymId: parseInt(req.params.gymId)
          },
          take: 5
        });

        const [equipment, reports, equipmentCategory] = await Promise.all([
          equipmentPromise,
          reportsPromise.then(reports => {
            const entitiesPromises = reports.map(async report => ({
              report,
              user: await report.user,
              // Promise<ReportVerification[]> -> Promise<{verification: ReportVerification, userOwner: {userOwner: UserOwner, user: User}}[]>
              verifications: await report.verifications.then(verifications => {
                const entitiesPromises = verifications.map(async verification => ({
                  verification,
                  userOwner: await verification.verifiedByUserOwner.then(async userOwner => ({
                    userOwner,
                    user: await userOwner.user
                  }))
                }));

                return Promise.all(entitiesPromises);
              })
            }));

            return Promise.all(entitiesPromises);
          }),
          equipmentPromise.then(e => e.category)
        ]);

        res.json({
          id: equipment.id,
          name: equipment.name,
          description: equipment.description,
          imagePath: equipment.imagePath,
          category: {
            id: equipmentCategory.id,
            name: equipmentCategory.name
          },
          reports: reports.map(({report, user, verifications}) => ({
            id: report.id,
            createdAt: report.createdAt,
            status: report.status,
            comment: report.comment,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              createdAt: user.createdAt
            },
            verifications: verifications.map(({verification, userOwner: {user, userOwner}}) => ({
              id: verification.id,
              createdAt: verification.createdAt,
              comment: verification.comment,
              verifiedByUserOwner: {
                id: userOwner.id,
                userId: user.id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt
              }
            }))
          }))
        })
      });

      app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      });

    })
    .catch(error => console.log(error))
