import { Producto } from "../../models/Producto.entity";

export interface IProductoRepository {
    save(producto: Producto): Promise<Producto>;
    findById(id: number): Promise<Producto | null>;
    findAll(): Promise<Producto[]>;
    update(id: number, producto: Partial<Producto>): Promise<Producto | null>;
}