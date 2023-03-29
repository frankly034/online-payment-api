import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { NotFoundError } from './utils/ApiError';
import { ErrorHandler } from './middlewares/ErrorHandler';
import config from './config/config';
import connection from './utils/database';
import { StatusCodes } from 'http-status-codes';
import router from './routes';
import helmet from 'helmet';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: 'Online Payment API',
  });
});

app.use('/api', router);

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
