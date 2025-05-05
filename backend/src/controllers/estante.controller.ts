import { Request, Response } from "express";
import { EstanteService } from "../services/estante.service";
import { EstanteRepository } from "../repositories/estante.repository";

const estanteService = new EstanteService(new EstanteRepository());

export class EstanteController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const estante = await estanteService.create(req.body);
      res.status(201).json(estante);
    } catch (error) {
      console.error("Create Estante Error:", error);
      res.status(500).json({ error: "Error creating estante" });
    }
  }
  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const estante = await estanteService.findById(id);

      if (!estante) {
        res.status(404).json({ error: "Estante not found" });
        return;
      }

      res.json(estante);
    } catch (error) {
      console.error("FindById Estante Error:", error);
      res.status(500).json({ error: "Error fetching estante" });
    }
  }
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const estantes = await estanteService.findAll();
      res.json(estantes);
    } catch (error) {
      console.error("FindAll Estantes Error:", error);
      res.status(500).json({ error: "Error fetching estantes" });
    }
  }
  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const estante = await estanteService.update(id, req.body);

      if (!estante) {
        res.status(404).json({ error: "Estante not found" });
        return;
      }

      res.json(estante);
    } catch (error) {
      console.error("Update Estante Error:", error);
      res.status(500).json({ error: "Error updating estante" });
    }
  }
}
