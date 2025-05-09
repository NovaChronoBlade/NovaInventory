import { ProductoRepository } from "../../repositories/producto.repository";
import { Producto } from "../../models/Producto.entity";
import { Proveedor } from "../../models/Proveedor.entity";
import { Estante } from "../../models/Estante.entity";

jest.mock("../../repositories/producto.repository");

describe("ProductoRepository", () => {
  // Configuración inicial para las pruebas
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
    // Inicializamos el repositorio antes de cada prueba
    productoRepository =
      new ProductoRepository() as jest.Mocked<ProductoRepository>;
  });

  it("debería guardar un nuevo producto", async () => {
    // Prueba para verificar que el repositorio puede guardar un producto correctamente
    productoRepository.save.mockResolvedValue(productoMock);

    const result = await productoRepository.save(productoMock);

    expect(result).toEqual(productoMock);
    expect(productoRepository.save).toHaveBeenCalledWith(productoMock);
  });

  it("debería retornar un producto por id", async () => {
    productoRepository.findById.mockResolvedValue(productoMock);

    const result = await productoRepository.findById(1);

    expect(result).toEqual(productoMock);
    expect(productoRepository.findById).toHaveBeenCalledWith(1);
  });

  it("debería retornar todos los productos", async () => {
    productoRepository.findAll.mockResolvedValue([productoMock]);

    const result = await productoRepository.findAll();

    expect(result).toEqual([productoMock]);
    expect(productoRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("debería actualizar un producto", async () => {
    // Prueba para verificar que el repositorio puede actualizar un producto correctamente
    const updateData = { nombre: "Producto actualizado" };
    const updatedProducto = { ...productoMock, ...updateData };

    productoRepository.update.mockResolvedValue(updatedProducto);

    const result = await productoRepository.update(1, updateData);

    expect(result).toEqual(updatedProducto);
    expect(productoRepository.update).toHaveBeenCalledWith(1, updateData);
  });
});
