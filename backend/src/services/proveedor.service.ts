import { IProveedorRepository } from "../repositories/interfaces/IProveedorRepository";
import { Proveedor } from "../models/Proveedor.entity";

export class ProveedorService {
  constructor(private readonly proveedorRepository: IProveedorRepository) {}

  async create(proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorRepository.save(proveedor);
  }

  async findById(id: number): Promise<Proveedor | null> {
    return this.proveedorRepository.findById(id);
  }

  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.findAll();
  }

  async update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor | null> {
    return this.proveedorRepository.update(id, proveedor);
  }
}
