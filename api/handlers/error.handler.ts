import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";

function errorHandler(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || "Ops !!! Ocorreu um erro.";
  response.status(status).send({
    status,
    message
  });
}

export default errorHandler;
