import { Proveedor } from "../../models/Proveedor.entity";

export interface IProveedorRepository {
  save(proveedor: Proveedor): Promise<Proveedor>;
  findById(id: number): Promise<Proveedor | null>;
  findAll(): Promise<Proveedor[]>;
  update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor | null>;
}
