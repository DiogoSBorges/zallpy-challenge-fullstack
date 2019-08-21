import { NextFunction, Response } from "express";
import IRequest from "../interfaces/request.interface";

function permissaoHandler(...allowed: any) {
  return (req: IRequest, res: Response, next: NextFunction) => {
    var role = req.usuario.tipoId == 1 ? "admin" : "user";
    if (allowed.indexOf(role) !== -1) {
      next();
    } else {
      res
        .status(403)
        .json({ message: `Esta funcionalidade é restrita para ${allowed}` }); // user is forbidden
    }
  };
}

export default permissaoHandler;
