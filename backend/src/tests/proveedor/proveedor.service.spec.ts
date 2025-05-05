import { ProveedorService } from "../../services/proveedor.service";
import { ProveedorRepository } from "../../repositories/proveedor.repository";
import { Proveedor } from "../../models/Proveedor.entity";

describe("ProveedorService", () => {
  let proveedorService: ProveedorService;
  let proveedorRepository: jest.Mocked<ProveedorRepository>;

  beforeEach(() => {
    // Mockeamos el repositorio
    proveedorRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
    } as unknown as jest.Mocked<ProveedorRepository>;

    proveedorService = new ProveedorService(proveedorRepository);
  });

  it("deberia crear un nuevo proveedor", async () => {
    const proveedor: Proveedor = {
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

    proveedorRepository.save.mockResolvedValue(proveedor);

    const result = await proveedorService.create(proveedor);

    expect(proveedorRepository.save).toHaveBeenCalledWith(proveedor);
    expect(result).toEqual(proveedor);
  });

  it("deberia buscar el proveedor por el id", async () => {
    const proveedor: Proveedor = {
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

    proveedorRepository.findById.mockResolvedValue(proveedor);

    const result = await proveedorService.findById(1);

    expect(proveedorRepository.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(proveedor);
  });

  it("debería devolver nulo al encontrar un proveedor por id que no existe", async () => {
    proveedorRepository.findById.mockResolvedValue(null);

    const result = await proveedorService.findById(999);

    expect(proveedorRepository.findById).toHaveBeenCalledWith(999);
    expect(result).toBeNull();
  });

  it("debe encontrar todos los proveedores", async () => {
    const proveedores: Proveedor[] = [
      {
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
      },
      {
        id: 2,
        nombre: "Proveedor 2",
        telefono: "987654321",
        email: "test2@test.com",
        direccion: "Direccion 2",
        informacion: "Informacion 2",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        productos: [],
      },
    ];

    proveedorRepository.findAll.mockResolvedValue(proveedores);

    const result = await proveedorService.findAll();

    expect(proveedorRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(proveedores);
  });

  it("debe actualizar el proovedor", async () => {
    const updatedProveedor: Proveedor = {
      id: 1,
      nombre: "Proveedor Actualizado",
      telefono: "123456789",
      email: "test@test.com",
      direccion: "Direccion 1",
      informacion: "Informacion Actualizada",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      productos: [],
    };

    proveedorRepository.update.mockResolvedValue(updatedProveedor);

    const result = await proveedorService.update(1, {
      nombre: "Proveedor Actualizado",
    });

    expect(proveedorRepository.update).toHaveBeenCalledWith(1, {
      nombre: "Proveedor Actualizado",
    });
    expect(result).toEqual(updatedProveedor);
  });

  it("debería devolver nulo al actualizar un proveedor que no existe", async () => {
    proveedorRepository.update.mockResolvedValue(null);

    const result = await proveedorService.update(999, {
      nombre: "Proveedor Inexistente",
    });

    expect(proveedorRepository.update).toHaveBeenCalledWith(999, {
      nombre: "Proveedor Inexistente",
    });
    expect(result).toBeNull();
  });
});
