import { NextFunction, Response } from "express";
import IRequest from "../interfaces/request.interface";
import { AppUsuarioSemPermissaoException } from "../exceptions/app.exception";

function permissaoHandler(...allowed: any) {
  return (req: IRequest, res: Response, next: NextFunction) => {
    var role = req.usuario.tipoId == 1 ? "admin" : "user";
    if (allowed.indexOf(role) !== -1) {
      next();
    } else {
      next(new AppUsuarioSemPermissaoException());
    }
  };
}

export default permissaoHandler;
