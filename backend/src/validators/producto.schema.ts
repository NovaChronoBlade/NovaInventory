import { z } from "zod";

export const productoSchema = z.object({
  tipoProducto: z.string().min(1, "El tipo de producto es obligatorio"),
  nombre: z.string().min(1, "El nombre del producto es obligatorio"),
  descripcion: z.string().min(1, "La descripción del producto es obligatoria"),
  precio: z
    .number()
    .positive("El precio debe ser un número positivo")
    .min(0.01, "El precio debe ser mayor a cero"),
  cantidad: z
    .number()
    .int("La cantidad debe ser un número entero")
    .positive("La cantidad debe ser un número positivo"),
});
