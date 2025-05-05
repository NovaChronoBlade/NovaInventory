import { IProductoRepository } from "../repositories/interfaces/IProductoRepository";
import { Producto } from "../models/Producto.entity";

export class ProductoService {
  constructor(private readonly productoRepository: IProductoRepository) {}

  async create(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async findById(id: number): Promise<Producto | null> {
    return this.productoRepository.findById(id);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.findAll();
  }

  async update(
    id: number,
    producto: Partial<Producto>
  ): Promise<Producto | null> {
    return this.productoRepository.update(id, producto);
  }
}
