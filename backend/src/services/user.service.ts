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

  async register(data: Partial<User>): Promise<any> {
    const existingUser = await this.userRepository.findByEmail(data.email!);

    if (existingUser) {
      throw new Error("Ya existe un usuario con ese correo electrónico");
    }

    const existingCedula = await this.userRepository.findByCedula(data.cedula!);
    if (existingCedula) {
      throw new Error("Ya existe un usuario con esa cédula");
    }

    const hashedPassword = await bcrypt.hash(data.password!, 10);
    const newUser = new User();
    Object.assign(newUser, data, {
      password: hashedPassword,
      rol: Role.VENDOR,
    });

    const userSaved = await this.userRepository.save(newUser);

    const publicUser = {
      rol: userSaved.rol,
      cedula: userSaved.cedula,
      nombre: userSaved.nombre,
      apellido: userSaved.apellido,
      email: userSaved.email,
    };

    return publicUser;
  }

  async login(
    email: string,
    password: string
  ): Promise<{ token: string; user: any }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Correo electrónico o contraseña incorrectos");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password!);

    if (!isPasswordValid) {
      throw new Error("Correo electrónico o contraseña incorrectos");
    }

    const token = jwt.sign({ id: user.id, rol: user.rol }, JWT_SECRET, {
      expiresIn: "1d",
    });

    const publicUser = {
      cedula: user.cedula,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
    };

    return { token, user: publicUser };
  }
}
