# Backend - Gestión de Inventario

## 1. Tecnologías Usadas
- **Express** → Framework para el servidor HTTP
- **TypeScript** → Tipado estático para JavaScript
- **SQL (MySQL)** → Base de datos relacional
- **TypeORM** → ORM/Query Builder para interactuar con la base de datos
- **Jest** → Pruebas unitarias y de integración
- **Dotenv** → Manejo de variables de entorno

---

## 2. Arquitectura y Organización

```
backend/
├── src/
│   ├── controllers/ → Controladores que manejan la lógica de las solicitudes
│   ├── models/ → Definiciones de las entidades y lógica de la base de datos
│   ├── routes/ → Rutas de la API
│   ├── services/ → Lógica de negocio y comunicación con la base de datos
│   ├── middlewares/ → Middleware para autenticación, logs, etc.
│   ├── config/ → Configuración de la base de datos, variables de entorno
│   ├── server.ts → Configuración y arranque del servidor
│   └── app.ts → Inicialización de Express y middleware
```

---

### Descripción de cada carpeta

#### 📂 `controllers/`
Contiene los controladores, que son responsables de manejar las solicitudes HTTP y responder con los datos necesarios. Los controladores interactúan con los servicios.

**Ejemplo:** `controllers/productController.ts`
```ts
import { Request, Response } from "express";
import ProductService from "../services/productService";

class ProductController {
  async getAll(req: Request, res: Response) {
    const products = await ProductService.getAll();
    res.json(products);
  }
}

export default new ProductController();
```

---

#### 📂 `models/`
Define las entidades de la base de datos utilizando TypeORM.

**Ejemplo:** `models/Product.ts`
```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column("decimal")
  precio!: number;

  @Column("int")
  stock!: number;
}

export default Product;
```

---

#### 📂 `routes/`
Define las rutas disponibles en la API y las asocia con sus controladores.

**Ejemplo:** `routes/productRoutes.ts`
```ts
import { Router } from "express";
import ProductController from "../controllers/productController";

const router = Router();

router.get("/", ProductController.getAll);

export default router;
```

---

#### 📂 `services/`
Contiene la lógica de negocio y maneja la comunicación con la base de datos.

**Ejemplo:** `services/productService.ts`
```ts
import { AppDataSource } from "../config/database";
import { Product } from "../models/Product";

class ProductService {
  async getAll() {
    return await AppDataSource.getRepository(Product).find();
  }
}

export default new ProductService();
```

---

#### 📂 `middlewares/`
Contiene funciones intermedias que procesan las solicitudes antes de llegar a los controladores.

**Ejemplo:** `middlewares/authMiddleware.ts`
```ts
import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Acceso no autorizado" });
  }
  next();
};

export default authMiddleware;
```

---

#### 📂 `config/`
Contiene archivos de configuración, como la conexión a la base de datos.

**Ejemplo:** `config/database.ts`
```ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import Product from "../models/Product";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Product],
  synchronize: true,
});
```

---

#### 📄 `server.ts`
Arranca el servidor Express.
```ts
import app from "./app";
import { AppDataSource } from "./config/database";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Base de datos conectada");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
```

---

#### 📄 `app.ts`
Configura Express y sus middlewares.
```ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/productos", productRoutes);

export default app;
```

---

## 3. Flujo de Datos en el Backend
1. **El cliente (React) envía una solicitud HTTP** (Ejemplo: `GET /productos`).
2. **La solicitud pasa por los middlewares** (Ejemplo: autenticación, validación).
3. **El controlador recibe la solicitud y la delega al servicio**.
4. **El servicio maneja la lógica de negocio e interactúa con la base de datos**.
5. **El servicio devuelve la respuesta al controlador**.
6. **El controlador envía la respuesta final al cliente**.


todo lo anterior es un ejemplo de como se organiza el backend, pero no es el que se usa en este proyecto.
---

