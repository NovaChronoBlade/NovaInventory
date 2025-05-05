import { ProveedorRepository } from "../../../src/repositories/proveedor.repository";
import { Proveedor } from "../../../src/models/Proveedor.entity";

jest.mock("../../../src/repositories/proveedor.repository");

describe("ProveedorRepository", () => {
  let proveedorRepository: ProveedorRepository;

  const proveedorMook: Proveedor = {
    id: 1,
    nombre: "Proveedor 1",
    telefono: "123456789",
    email: "test@test.com",
    direccion: "Direccion 1",
    informacion: "Informacion 1",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    productos: [],
  };

  beforeEach(() => {
    proveedorRepository = new ProveedorRepository();
  });

  it("Debería salvar a un nuevo proveedor", async () => {
    proveedorRepository.save = jest.fn().mockResolvedValue(proveedorMook);

    const result = await proveedorRepository.save(proveedorMook);

    expect(result).toEqual(proveedorMook);
    expect(proveedorRepository.save).toHaveBeenCalledTimes(1);
  });

  it("Debería encontrar un proveedor por id", async () => {
    proveedorRepository.findById = jest.fn().mockResolvedValue(proveedorMook);

    const result = await proveedorRepository.findById(1);

    expect(result).toEqual(proveedorMook);
    expect(proveedorRepository.findById).toHaveBeenCalledWith(1);
  });

  it("Debe devolver una matriz vacía si no se encuentran proveedores", async () => {
    proveedorRepository.findAll = jest.fn().mockResolvedValue([]);

    const result = await proveedorRepository.findAll();

    expect(result).toEqual([]);
    expect(proveedorRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
