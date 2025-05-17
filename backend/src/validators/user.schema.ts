import { z } from "zod";
export const userRegisterSchema = z.object({
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellido: z.string().min(1, "El apellido es obligatorio"),
  cedula: z
    .string()
    .regex(/^\d+$/, "La cédula debe contener solo números")
    .min(6, "La cédula es obligatoria")
    .max(12, "La cédula no puede tener más de 12 dígitos"),
});

export const userLoginSchema = z.object({
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(1, "La contraseña debe tener al menos 6 caracteres"),
});
