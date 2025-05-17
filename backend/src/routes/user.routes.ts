import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";
import { validate } from "../middlewares/validate";
import { userLoginSchema, userRegisterSchema } from "../validators/user.schema";

const router = Router();
const userController = new UserController();

router.post("/login", validate(userLoginSchema), (req, res) =>
  userController.login(req, res)
);
router.post("/register", validate(userRegisterSchema), (req, res) =>
  userController.register(req, res)
);

// router.get("/admin", verifyToken, (req, res) => {
//   res.status(200).json({ message: "Acceso admin" });
// });

export default router;
