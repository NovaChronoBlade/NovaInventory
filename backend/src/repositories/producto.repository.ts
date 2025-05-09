import { AppDataSource } from "../data-source";
import { Producto } from "../models/Producto.entity";
import { IProductoRepository } from "./interfaces/IProductoRepository";

export class ProductoRepository implements IProductoRepository {
  private readonly productoRepository = AppDataSource.getRepository(Producto);

  async save(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async findById(id: number): Promise<Producto | null> {
    return this.productoRepository.findOne({
      where: { id },
      relations: ["proveedor", "estante"],
    });
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({
      relations: ["proveedor", "estante"],
    });
  }

  async update(
    id: number,
    producto: Partial<Producto>
  ): Promise<Producto | null> {
    const existingProducto = await this.findById(id);

    if (!existingProducto) {
      return null;
    }

    Object.assign(existingProducto, producto);

    return await this.productoRepository.save(existingProducto);
  }
}
