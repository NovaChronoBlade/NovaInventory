import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error: any) {
      const formattedErrors = error.errors.map((err: any) => {
        const field = err.path.join(".");
        switch (err.code) {
          case "invalid_type":
            return `El campo '${field}' ${err.message.toLowerCase()}`;
          case "too_small":
            return `El campo '${field}' debe tener al menos ${err.minimum} caracteres`;
          case "invalid_enum_value":
            return `El valor de '${field}' no es válido`;
          default:
            return `Error en el campo '${field}': ${err.message}`;
        }
      });

      res.status(400).json({
        message: "Error de validación",
        errors: formattedErrors,
      });
    }
  };
