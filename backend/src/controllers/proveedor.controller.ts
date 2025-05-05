import { Request, Response } from "express";
import { ProveedorService } from "../services/proveedor.service";
import { ProveedorRepository } from "../repositories/proveedor.repository";

const proveedorService = new ProveedorService(new ProveedorRepository());

export class ProveedorController {
  async create(req: Request, res: Response) {
    try {
      const proveedor = await proveedorService.create(req.body);
      res.status(201).json(proveedor);
    } catch (error) {
      res.status(500).json({ error: "Error creating proveedor" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const proveedor = await proveedorService.findById(Number(req.params.id));
      if (!proveedor) {
        return res.status(404).json({ error: "Proveedor not found" });
      }
      res.json(proveedor);
    } catch (error) {
      res.status(500).json({ error: "Error fetching proveedor" });
    }
  }
  async findAll(req: Request, res: Response) {
    try {
      const proveedores = await proveedorService.findAll();
      res.json(proveedores);
    } catch (error) {
      res.status(500).json({ error: "Error fetching proveedores" });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const proveedor = await proveedorService.update(
        Number(req.params.id),
        req.body
      );
      if (!proveedor) {
        return res.status(404).json({ error: "Proveedor not found" });
      }
      res.json(proveedor);
    } catch (error) {
      res.status(500).json({ error: "Error updating proveedor" });
    }
  }
}
