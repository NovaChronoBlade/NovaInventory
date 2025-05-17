import { z } from "zod";
export const proveedorSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  telefono: z
    .string()
    .regex(/^\d+$/, "El teléfono debe contener solo números")
    .min(1, "El teléfono es obligatorio")
    .max(10, "El teléfono no puede tener más de 10 dígitos"),
  email: z.string().email("El correo electrónico no es válido"),
  direccion: z.string().min(1, "La dirección es obligatoria"),
  informacion: z.string().optional(),
});
