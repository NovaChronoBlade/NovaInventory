import { ProductoService } from "../../services/producto.service";
import { ProductoRepository } from "../../repositories/producto.repository";
import { Producto } from "../../models/Producto.entity";
import { Proveedor } from "../../models/Proveedor.entity";
import { Estante } from "../../models/Estante.entity";

describe("ProductoService", () => {
  // Configuración inicial para las pruebas
  let productoService: ProductoService;
  let productoRepository: jest.Mocked<ProductoRepository>;

  const productoMock: Producto = {
    id: 1,
    nombre: "Producto 1",
    tipoProducto: "Tipo A",
    descripcion: "Desc",
    precio: 100.0,
    cantidad: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    proveedor: new Proveedor(),
    estante: new Estante(),
  };

  beforeEach(() => {
    // Mockeamos el repositorio para simular su comportamiento sin interactuar con la base de datos real
    productoRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
    } as unknown as jest.Mocked<ProductoRepository>;

    productoService = new ProductoService(productoRepository);
  });

  it("debería crear un nuevo producto", async () => {
    // Prueba para verificar que el servicio puede crear un producto correctamente
    productoRepository.save.mockResolvedValue(productoMock);

    const result = await productoService.create(productoMock);

    expect(productoRepository.save).toHaveBeenCalledWith(productoMock);
    expect(result).toEqual(productoMock);
  });

  it("debería buscar el producto por el id", async () => {
    productoRepository.findById.mockResolvedValue(productoMock);

    const result = await productoService.findById(1);

    expect(productoRepository.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(productoMock);
  });

  it("debería retornar nulo al al encontrar un producto por id que no existe", async () => {
    productoRepository.findById.mockResolvedValue(null);

    const result = await productoService.findById(999);

    expect(productoRepository.findById).toHaveBeenCalledWith(999);
    expect(result).toBeNull();
  });

  it("debería retornar todos los productos", async () => {
    productoRepository.findAll.mockResolvedValue([productoMock]);

    const result = await productoService.findAll();

    expect(result).toEqual([productoMock]);
    expect(productoRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("debería actualizar un producto", async () => {
    // Prueba para verificar que el servicio puede actualizar un producto correctamente
    const updateData = { nombre: "Producto actualizado" };
    const updatedProducto = { ...productoMock, ...updateData };

    productoRepository.update.mockResolvedValue(updatedProducto);

    const result = await productoService.update(1, updateData);

    expect(result).toEqual(updatedProducto);
    expect(productoRepository.update).toHaveBeenCalledWith(1, updateData);
  });
});
