// src/data-source.ts
import { config } from "dotenv";
config();

import { DataSource } from "typeorm";
// import { User } from './entity/User'

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [],
  synchronize: true,
  logging: false,
});
