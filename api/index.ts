import express, {Request, Response} from 'express';
import "reflect-metadata"
import dotenv from 'dotenv';

dotenv.config();
import {AppDataSource} from "./data-source";

import cors from "cors";
import Equipment from "./models/Equipment";
import Report from "./models/Report";
import Gym from "./models/Gym"


AppDataSource.initialize()
    .then(async () => {

      const app = express();

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

      app.get('/api/gym/:id', async (req: Request<{ id: string }>, res: Response) => {
        const gymId = parseInt(req.params.id);
        const gym = await AppDataSource.manager.findOneBy(Gym, {id: gymId});

        if (!gym) {
          return res.status(404).json({
            message: `No gym found with id ${gymId}`
          });
        }

        const equipments = await AppDataSource.manager
            .createQueryBuilder(Equipment, 'equipment')
            .addSelect('COUNT(report.id)', 'reportsCount')
            .addSelect('FIRST_VALUE(report.status) OVER (ORDER BY report.createdAt)', 'mostRecentReportStatus')
            .innerJoin(Report, 'report', 'report.equipmentId = equipment.id')
            .innerJoin(Gym, 'gym', 'gym.id = report.gymId')
            .where('gym.id = :gymId', {gymId})
            .groupBy('equipment.id')
            .orderBy('report.createdAt', 'DESC')
            .getRawMany<{
              equipment_id: number,
              equipment_categoryId: number,
              equipment_name: string,
              equipment_description: string,
              equipment_imagePath: string,
              reportsCount: `${number}`,
              mostRecentReportStatus: null | 0 | 1
            }>();

        res.json({
          id: gym.id,
          name: gym.name,
          imagePath: gym.imagePath,
          equipments: equipments.map(({
                                        equipment_id,
                                        equipment_categoryId,
                                        equipment_name,
                                        equipment_description,
                                        equipment_imagePath,
                                        reportsCount,
                                        mostRecentReportStatus
                                      }) => ({
            id: equipment_id,
            name: equipment_name,
            description: equipment_description,
            imagePath: equipment_imagePath,
            reportsCount: parseInt(reportsCount),
            status: mostRecentReportStatus
          }))
        });
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
