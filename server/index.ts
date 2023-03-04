import express, { Express, Request, Response, NextFunction }  from 'express'
import dotenv from 'dotenv';
import cors from "cors";
import { CONNECTDB } from './db/db';

const app: Express = express();
dotenv.config()

app.use(cors({origin: '*'}))
app.use((req: Request, res : Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//connect to database
CONNECTDB(process.env.mongoDB_URL)

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});