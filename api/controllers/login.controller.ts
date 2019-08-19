import { Request, Response, Router } from "express";
import IController from "./../interfaces/controller.interface";
import AutorizacaoHandler from "./../handlers/autorizacao.handler";
import IRequest from "./../interfaces/request.interface";
import {FazerLoginService} from './../services/fazer-login.service'

export class LoginController implements IController {
  public path = "/login";
  public router = Router();

  constructor() {
    this.iniciarRotas();
  }

  public iniciarRotas() {
    this.router.post(this.path, this.fazerLogin);
    this.router.get(this.path, AutorizacaoHandler, this.teste);
  }

  fazerLogin = async (request: Request, response: Response) => {
    const body = request.body;
    await FazerLoginService.fazerLogin(body.email, body.senha, response)    
  };

  teste = async (request: IRequest, response: Response) => {
    response.status(200).send("authorizado");
  };
}
