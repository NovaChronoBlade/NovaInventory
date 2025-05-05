import { AppDataSource } from "../data-source";
import { Proveedor } from "../models/Proveedor.entity";
import { IProveedorRepository } from "./interfaces/IProveedorRepository";

export class ProveedorRepository implements IProveedorRepository {
  private proveedorRepository = AppDataSource.getRepository(Proveedor);

  async save(proveedor: Proveedor): Promise<Proveedor> {
    return await this.proveedorRepository.save(proveedor);
  }

  async findById(id: number): Promise<Proveedor | null> {
    return await this.proveedorRepository.findOne({
      where: { id },
      relations: ["productos"],
    });
  }

  async findAll(): Promise<Proveedor[]> {
    return await this.proveedorRepository.find({
      relations: ["productos"],
    });
  }

  async update(
    id: number,
    proveedor: Partial<Proveedor>
  ): Promise<Proveedor | null> {
    const existingProveedor = await this.findById(id);
    if (!existingProveedor) {
      return null;
    }
    const updatedProveedor = { ...existingProveedor, ...proveedor };
    return await this.proveedorRepository.save(updatedProveedor);
  }
}
