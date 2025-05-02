import { IProductoRepository } from "../repositories/interfaces/IProductoRepository";
import { Producto } from "../models/Producto.entity";

export class ProductoService {
    constructor(private readonly productoRepository: IProductoRepository) {}

    async create(producto: Producto): Promise<Producto> {
        return await this.productoRepository.save(producto);
    }

    async findById(id: number): Promise<Producto | null> {
        return await this.productoRepository.findById(id);
    }

    async findAll(): Promise<Producto[]> {
        return await this.productoRepository.findAll();
    }

    async update(id: number, producto: Partial<Producto>): Promise<Producto | null> {
        return await this.productoRepository.update(id, producto);
    }

}