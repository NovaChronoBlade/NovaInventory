import { Router } from "express";
import { ProveedorController } from "../controllers/proveedor.controller";
import { validate } from "../middlewares/validate";
import { proveedorSchema } from "../validators/proveedor.schema";

const router = Router();
const proveedorController = new ProveedorController();

router.post("/", validate(proveedorSchema), (req, res) =>
  proveedorController.create(req, res)
);
router.get("/:id", (req, res) => proveedorController.findById(req, res));
router.get("/", (req, res) => proveedorController.findAll(req, res));
router.put("/:id", (req, res) => proveedorController.update(req, res));

export default router;
