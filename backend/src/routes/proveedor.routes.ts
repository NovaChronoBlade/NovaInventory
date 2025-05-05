import { Router } from "express";
import { ProveedorController } from "../controllers/proveedor.controller";

const router = Router();
const proveedorController = new ProveedorController();

router.post("/", (req, res) => proveedorController.create(req, res));
router.get("/:id", (req, res) => proveedorController.findById.bind(req, res));
router.get("/", (req, res) => proveedorController.findAll(req, res));
router.put("/:id", (req, res) => proveedorController.update(req, res));

export default router;
