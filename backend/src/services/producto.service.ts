import { IProductoRepository } from "../repositories/interfaces/IProductoRepository";
import { Producto } from "../models/Producto.entity";
import { StockAlertService } from "./stockAlert.service";

export class ProductoService {
  private readonly stockAlertService: StockAlertService =
    new StockAlertService();

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
    const updatedProducto = await this.productoRepository.update(id, producto);

    if (updatedProducto && updatedProducto.cantidad === 0) {
      await this.stockAlertService.sendStockAlert(updatedProducto.nombre);
    }

    return updatedProducto;
  }
}
