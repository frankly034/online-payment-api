import dotenv from 'dotenv';

dotenv.config({ path: __dirname + `/../../.env` });

const config = {
  dbHost: process.env.POSTGRES_HOST,
  dbUser: process.env.POSTGRES_USER,
  dbPassword: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  appPort: process.env.APPLICATION_PORT,
  paystackSecret: process.env.PAYSTACK_SECRET_KEY,
  paystackUrl: process.env.PAYSTACK_BASE_URL,
};

export default config;
