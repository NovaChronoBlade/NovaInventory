// src/data-source.ts
import { config } from "dotenv";
config();

import { DataSource } from "typeorm";
import { User } from "./models/User.entity";
import { Estante } from "./models/Estante.entity";
import { Producto } from "./models/Producto.entity";
import { Proveedor } from "./models/Proveedor.entity";


export const AppDataSource = new DataSource({
  type: "sqlite",
  // host: process.env.DB_HOST || "localhost",
  // port: parseInt(process.env.MYSQL_PORT || "3306"),
  // username: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [User, Estante, Producto, Proveedor],
  synchronize: true,
  logging: false,
});
