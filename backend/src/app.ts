import express from "express";
import productoRouter from "./routes/producto.routes";
import proveedorRouter from "./routes/proveedor.routes";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/productos", productoRouter);
app.use("/api/proveedores", proveedorRouter);


app.get("/camilo", (req, res) => {
  res.send("Hello World!");
});
app.get("/santiago", (req, res) => {
  res.send("new love!");
});
export default app;
