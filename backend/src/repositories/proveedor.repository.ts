import { AppDataSource } from "../data-source";
import { Proveedor } from "../models/Proveedor.entity";
import { IProveedorRepository } from "./interfaces/IProveedorRepository";

export class ProveedorRepository implements IProveedorRepository {
  private readonly repository = AppDataSource.getRepository(Proveedor);

  async save(proveedor: Proveedor): Promise<Proveedor> {
    return this.repository.save(proveedor);
  }

  async findById(id: number): Promise<Proveedor | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["productos"],
    });
  }

  async findAll(): Promise<Proveedor[]> {
    return this.repository.find({
      relations: ["productos"],
    });
  }

  async update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const updated = this.repository.merge(existing, proveedor);
    return this.repository.save(updated);
  }
}
