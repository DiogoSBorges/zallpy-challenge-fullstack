import { NextFunction, Response } from "express";
import { TokenService } from "./../services/token.service";
import IRequest from '../interfaces/request.interface'
import {AppAcessoRestritoException, AppTokenInvalidoException} from '../exceptions/app.exception';

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
    next(new AppAcessoRestritoException());
  } else {
    try {
      const decoded = await TokenService.decodificarToken(token);
      request.usuario = decoded;
      next();
    } catch (error) {
      next(new AppTokenInvalidoException());
    }
  }
}

export default autorizacaoHandler;
