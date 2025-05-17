import { Request, Response, NextFunction } from "express";

interface ErrorHandler extends Error {
  status?: number;
}

export const errorHandler = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err.message);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
