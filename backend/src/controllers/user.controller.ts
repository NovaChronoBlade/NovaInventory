import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";

const userService = new UserService(new UserRepository());

export class UserController {
  async register(req: Request, res: Response) {
    try {
      const user = await userService.register(req.body);
      res.status(201).json({ message: "Usuario creado correctamente", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await userService.login(req.body.email, req.body.password);
      res.status(200).json({ message: "Logueado correctamente", ...result });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}
