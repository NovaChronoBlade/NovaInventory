import { AppDataSource } from "../data-source";
import { User } from "../models/User.entity";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  private readonly repository = AppDataSource.getRepository(User);

  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  async findByCedula(cedula: number): Promise<User | null> {
    return this.repository.findOneBy({ cedula });
  }
}
