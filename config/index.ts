import * as dotenv from "dotenv";
dotenv.config();

type DBConfig = {
  username: string,
  password: string,
  database: string,
  port: number,
  host: string,
};

type DbUri = string;

export const dbConfig: DBConfig = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres123',
  database: process.env.DB_NAME || 'my_sample_database',
  port: parseInt(process.env.DB_PORT || '5433'),
  host: process.env.DB_HOST || '127.0.0.1',
};

export const DB_URI: DbUri = process.env.DB_URI || `postgresql://${dbConfig.username}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
