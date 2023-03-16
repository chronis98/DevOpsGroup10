import { Express, Request, Response } from 'express';
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import {User} from "./User";

const dotenv = require('dotenv');
dotenv.config();
const test="xronis";
const express = require('express');
const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send({yeet: 5});
    
});
// app.get('/:id', async (req: Request, res: Response) => {
    
//     let result;
   


    
//         console.log("Loading users from the database...")
//          result = await AppDataSource.manager.findOneBy(User,{
//             email: req.params.id as string}
//         );
      
//     res.send({result});
    

    
  
    
    
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.email = 'arie_bisfki@live.nl';
    // user.password = 'testhihih';
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
