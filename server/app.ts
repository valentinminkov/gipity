import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { authenticateOpenAI } from './middlewares/authenticateOpenAI';
import openaiRoutes from './routes/openaiRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors<Request>());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time:', Date.now());
  next();
});

app.use(authenticateOpenAI);

app.use('/openai', openaiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
