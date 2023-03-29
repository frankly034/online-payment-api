import dotenv from 'dotenv';

dotenv.config({ path: __dirname + `/../../.env` });

const config = {
  dbHost: process.env.POSTGRES_HOST,
  dbUser: process.env.POSTGRES_USER,
  dbPassword: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  appPort: process.env.APPLICATION_PORT,
};

export default config;
