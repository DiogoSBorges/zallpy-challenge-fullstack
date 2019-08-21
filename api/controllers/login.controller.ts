import { Request, Response, Router, NextFunction } from "express";
import IController from "./../interfaces/controller.interface";
import { FazerLoginService } from "../services/login/fazer-login.service";

export class LoginController implements IController {
  public path = "/login";
  public router = Router();

  constructor() {
    this.iniciarRotas();
  }

  public iniciarRotas() {
    this.router.post(this.path, this.fazerLogin);
  }

  fazerLogin = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const body = request.body;
    try {
      const retorno = await FazerLoginService.fazerLogin(
        body.email,
        body.senha
      );
      response.status(200).send(retorno);
    } catch (error) {
      next(error);
    }
  };
}
