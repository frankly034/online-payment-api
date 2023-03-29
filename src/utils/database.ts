import { Sequelize } from 'sequelize-typescript';
import config from '../config/config';

const connection = new Sequelize({
  dialect: 'postgres',
  host: config.dbHost,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  logging: false,
  models: [__dirname + '/../models'],
});

export default connection;
