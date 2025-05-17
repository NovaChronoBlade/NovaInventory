import { z } from "zod";
export const estanteSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
});
