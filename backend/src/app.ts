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

app.get("/camilo", (req, res) => {
  res.send("Hello World!");
});
app.get("/santiago", (req, res) => {
  res.send("new love!");
});
export default app;
