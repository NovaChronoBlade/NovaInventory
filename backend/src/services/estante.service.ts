import { IEstanteRepository } from "../repositories/interfaces/IEstanteRepository";
import { Estante } from "../models/Estante.entity";

/**
 * Servicio para manejar la lógica de negocio relacionada con los estantes.
 */
export class EstanteService {
  constructor(private readonly estanteRepository: IEstanteRepository) {}

  /**
   * Crea un nuevo estante.
   * @param estante - Datos del estante a crear.
   * @returns El estante creado.
   */
  async create(estante: Estante): Promise<Estante> {
    return this.estanteRepository.save(estante);
  }

  /**
   * Busca un estante por su ID.
   * @param id - ID del estante.
   * @returns El estante encontrado o null si no existe.
   */
  async findById(id: number): Promise<Estante | null> {
    return this.estanteRepository.findById(id);
  }

  /**
   * Obtiene todos los estantes.
   * @returns Una lista de estantes.
   */
  async findAll(): Promise<Estante[]> {
    return this.estanteRepository.findAll();
  }

  /**
   * Actualiza un estante existente.
   * @param id - ID del estante a actualizar.
   * @param estante - Datos a actualizar.
   * @returns El estante actualizado o null si no existe.
   */
  async update(id: number, estante: Partial<Estante>): Promise<Estante | null> {
    return this.estanteRepository.update(id, estante);
  }
}
