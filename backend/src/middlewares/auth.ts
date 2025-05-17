import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";

config();

const SECRET_KEY: Secret | undefined = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error("SECRET_KEY no está definido");
}

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Token no proporcionado o malformado" });
  }

  const token = authHeader.replace("Bearer ", "").trim();

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};
