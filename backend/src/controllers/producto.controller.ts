import { Request, Response } from "express";
import { ProductoService } from "../services/producto.service";
import { ProductoRepository } from "../repositories/producto.repository";

const productoService = new ProductoService(new ProductoRepository());

export class ProductoController {
  async create(req: Request, res: Response) {
    try {
      const producto = await productoService.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Error creating producto" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const producto = await productoService.findById(Number(req.params.id));
      if (!producto) {
        return res.status(404).json({ error: "Producto not found" });
      }
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: "Error fetching producto" });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const productos = await productoService.findAll();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: "Error fetching productos" });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const producto = await productoService.update(
        Number(req.params.id),
        req.body
      );
      if (!producto) {
        return res.status(404).json({ error: "Producto not found" });
      }
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: "Error updating producto" });
    }
  }
}
