import { User } from "../../models/User.entity";

export interface IUserRepository {
  save(user: User): Promise<User>;
//   findById(id: number): Promise<User | null>;
//   findAll(): Promise<User[]>;
//   update(id: number, user: Partial<User>): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
//   findByCedula(cedula: number): Promise<User | null>;
}
