import { NextFunction, Response } from "express";
import { TokenService } from "./../services/token.service";
import IRequest from '../interfaces/request.interface'

async function autorizacaoHandler(
  request: IRequest,
  response: Response,
  next: NextFunction
) {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"];

  if (!token) {
    response.status(401).json({
      message: "Acesso Restrito"
    });
  } else {
    try {
      const decoded = await TokenService.decodificarToken(token);
      request.usuario = decoded;
      next();
    } catch (error) {
      response.status(401).json({
        message: "Token Inválido"
      });
    }
  }
}

export default autorizacaoHandler;
