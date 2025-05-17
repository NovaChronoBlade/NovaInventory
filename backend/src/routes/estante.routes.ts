import { Router } from "express";
import { EstanteController } from "../controllers/estante.controller";
import { validate } from "../middlewares/validate";
import { estanteSchema } from "../validators/estante.schema";

const router = Router();
const estanteController = new EstanteController();

router.post("/", validate(estanteSchema), (req, res) =>
  estanteController.create(req, res)
);
router.get("/:id", (req, res) => estanteController.findById(req, res));
router.get("/", (req, res) => estanteController.findAll(req, res));
router.put("/:id", (req, res) => estanteController.update(req, res));

export default router;
