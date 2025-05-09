import express from "express";
import productoRouter from "./routes/producto.routes";
import proveedorRouter from "./routes/proveedor.routes";
import estanteRouter from "./routes/estante.routes";
import authRouter from "./routes/user.routes";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/proveedores", proveedorRouter);
app.use("/api/productos", productoRouter);
app.use("/api/estantes", estanteRouter);

app.use("/api/auth", authRouter);

// Removed arbitrary endpoints '/camilo' and '/santiago'.
export default app;
