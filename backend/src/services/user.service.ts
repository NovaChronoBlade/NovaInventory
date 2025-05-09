import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { User } from "../models/User.entity";
import { Role } from "../constants/roles";

config();

const JWT_SECRET = process.env.JWT_SECRET || "secreto_super_seguro";

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async register(data: Partial<User>): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(data.email!);

    if (existingUser) {
      throw new Error("Ya existe un usuario con ese correo electrónico");
    }

    const hashedPassword = await bcrypt.hash(data.password!, 10);
    const newUser = new User();
    Object.assign(newUser, data, {
      password: hashedPassword,
      role: data.rol || Role.VENDOR,
    });

    return this.userRepository.save(newUser);
  }

  async login(
    email: string,
    password: string
  ): Promise<{ token: string; user: User }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password!);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user.id, rol: user.rol }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return { token, user };
  }
}
