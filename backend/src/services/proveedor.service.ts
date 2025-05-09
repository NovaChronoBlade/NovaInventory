import { IProveedorRepository } from "../repositories/interfaces/IProveedorRepository";
import { Proveedor } from "../models/Proveedor.entity";

/**
 * Servicio para manejar la lógica de negocio relacionada con los proveedores.
 */
export class ProveedorService {
  constructor(private readonly proveedorRepository: IProveedorRepository) {}

  /**
   * Crea un nuevo proveedor.
   * @param proveedor - Datos del proveedor a crear.
   * @returns El proveedor creado.
   */
  async create(proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorRepository.save(proveedor);
  }

  /**
   * Busca un proveedor por su ID.
   * @param id - ID del proveedor.
   * @returns El proveedor encontrado o null si no existe.
   */
  async findById(id: number): Promise<Proveedor | null> {
    return this.proveedorRepository.findById(id);
  }

  /**
   * Obtiene todos los proveedores.
   * @returns Una lista de proveedores.
   */
  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.findAll();
  }

  /**
   * Actualiza un proveedor existente.
   * @param id - ID del proveedor a actualizar.
   * @param proveedor - Datos a actualizar.
   * @returns El proveedor actualizado o null si no existe.
   */
  async update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor | null> {
    return this.proveedorRepository.update(id, proveedor);
  }
}
