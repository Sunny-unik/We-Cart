import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! ' + req);
});

app.listen(4000, () => console.log('app is live on http://localhost:4000'));
