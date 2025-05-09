import { Estante } from "../../models/Estante.entity";

export interface IEstanteRepository {
  save(estante: Estante): Promise<Estante>;
  findById(id: number): Promise<Estante | null>;
  findAll(): Promise<Estante[]>;
  update(id: number, estante: Partial<Estante>): Promise<Estante | null>;
}
