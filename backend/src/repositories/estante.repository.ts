import { AppDataSource } from "../data-source";
import { Estante } from "../models/Estante.entity";
import { IEstanteRepository } from "./interfaces/IEstanteRepository";

export class EstanteRepository implements IEstanteRepository {
  private readonly repository = AppDataSource.getRepository(Estante);

  async save(estante: Estante): Promise<Estante> {
    return this.repository.save(estante);
  }

  async findById(id: number): Promise<Estante | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["productos"],
    });
  }

  async findAll(): Promise<Estante[]> {
    return this.repository.find({
      relations: ["productos"],
    });
  }

  async update(id: number, estante: Partial<Estante>): Promise<Estante | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const updated = this.repository.merge(existing, estante);
    return this.repository.save(updated);
  }
}
