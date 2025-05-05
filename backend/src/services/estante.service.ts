import { IEstanteRepository } from "../repositories/interfaces/IEstanteRepository";
import { Estante } from "../models/Estante.entity";

export class EstanteService {
  constructor(private readonly estanteRepository: IEstanteRepository) {}

  async create(estante: Estante): Promise<Estante> {
    return this.estanteRepository.save(estante);
  }

  async findById(id: number): Promise<Estante | null> {
    return this.estanteRepository.findById(id);
  }

  async findAll(): Promise<Estante[]> {
    return this.estanteRepository.findAll();
  }

  async update(id: number, estante: Partial<Estante>): Promise<Estante | null> {
    return this.estanteRepository.update(id, estante);
  }
}
