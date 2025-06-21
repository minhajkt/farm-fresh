import { NextFunction, Request, Response } from "express";
import { MongoServerError } from "mongodb";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // MongoDB duplicate key error (e.g., phone already exists)
  if (err instanceof MongoServerError && err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]; // e.g., "phone"
    return res.status(409).json({
      success: false,
      message: `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } already exists`,
    });
  }

  // Default fallback error
  return res.status(500).json({
    success: false,
    message: err.message || "Server error",
  });
};
