import { IProductoRepository } from "../repositories/interfaces/IProductoRepository";
import { Producto } from "../models/Producto.entity";
import { StockAlertService } from "./stockAlert.service";

/**
 * Servicio para manejar la lógica de negocio relacionada con los productos.
 */
export class ProductoService {
  private readonly stockAlertService: StockAlertService =
    new StockAlertService();

  constructor(private readonly productoRepository: IProductoRepository) {}

  /**
   * Crea un nuevo producto.
   * @param producto - Datos del producto a crear.
   * @returns El producto creado.
   */
  async create(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  /**
   * Busca un producto por su ID.
   * @param id - ID del producto.
   * @returns El producto encontrado o null si no existe.
   */
  async findById(id: number): Promise<Producto | null> {
    return this.productoRepository.findById(id);
  }

  /**
   * Obtiene todos los productos.
   * @returns Una lista de productos.
   */
  async findAll(): Promise<Producto[]> {
    return this.productoRepository.findAll();
  }

  /**
   * Actualiza un producto existente.
   * @param id - ID del producto a actualizar.
   * @param producto - Datos a actualizar.
   * @returns El producto actualizado o null si no existe.
   */
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
