import { Router } from "express";
import { ProductoController } from "../controllers/producto.controller";

const router = Router();
const productoController = new ProductoController();

router.post("/", (req, res) => productoController.create(req, res));
router.get("/:id", (req, res) => productoController.findById.bind(req, res));
router.get("/", (req, res) => productoController.findAll(req, res));
router.put("/:id", (req, res) => productoController.update.bind(req, res));

export default router;
