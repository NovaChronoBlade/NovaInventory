import { User } from "../../models/User.entity";

export interface IUserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByCedula(cedula: number): Promise<User | null>;
}
