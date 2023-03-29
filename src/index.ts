import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import { NotFoundError } from './utils/ApiError';
import { ErrorHandler } from './middlewares/ErrorHandler';
import config from './config/config';
import connection from './utils/database';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'hello world!',
  });
});

app.use((req: Request) => {
  throw new NotFoundError(req.path);
});

app.use(ErrorHandler.handle);

const PORT = config.appPort || 3000;

const startServer = async () => {
  try {
    await connection.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
};

startServer();
