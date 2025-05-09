import { EstanteService } from "../../services/estante.service";
import { EstanteRepository } from "../../repositories/estante.repository";
import { Estante } from "../../models/Estante.entity";

describe("EstanteService", () => {
  let estanteService: EstanteService;
  let estanteRepository: jest.Mocked<EstanteRepository>;

  const estanteMock: Estante = {
    id: 1,
    nombre: "Estante A",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    productos: [],
  };

  beforeEach(() => {
    estanteRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
    } as unknown as jest.Mocked<EstanteRepository>;

    estanteService = new EstanteService(estanteRepository);
  });

  it("debería crear un nuevo estante", async () => {
    estanteRepository.save.mockResolvedValue(estanteMock);

    const result = await estanteService.create(estanteMock);

    expect(estanteRepository.save).toHaveBeenCalledWith(estanteMock);
    expect(result).toEqual(estanteMock);
  });

  it("debería buscar un estante por id", async () => {
    estanteRepository.findById.mockResolvedValue(estanteMock);

    const result = await estanteService.findById(1);

    expect(estanteRepository.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(estanteMock);
  });

  it("debería retornar nulo al buscar un estante por id que no existe", async () => {
    estanteRepository.findById.mockResolvedValue(null);

    const result = await estanteService.findById(999);

    expect(estanteRepository.findById).toHaveBeenCalledWith(999);
    expect(result).toBeNull();
  });

  it("debería retornar todos los estantes", async () => {
    estanteRepository.findAll.mockResolvedValue([estanteMock]);

    const result = await estanteService.findAll();

    expect(result).toEqual([estanteMock]);
    expect(estanteRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("debería actualizar un estante", async () => {
    const updateData = { nombre: "Estante actualizado" };
    const updatedEstante = { ...estanteMock, ...updateData };

    estanteRepository.update.mockResolvedValue(updatedEstante);

    const result = await estanteService.update(1, updateData);

    expect(result).toEqual(updatedEstante);
    expect(estanteRepository.update).toHaveBeenCalledWith(1, updateData);
  });
});