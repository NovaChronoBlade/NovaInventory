import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const router = Router();
const userController = new UserController();

router.post("/login", (req, res) => userController.login(req, res));
router.post("/register", (req, res) => userController.register(req, res));

router.get("/admin", verifyToken, (req, res) => {
  res.status(200).json({ message: "Acceso admin" });
});

export default router;
