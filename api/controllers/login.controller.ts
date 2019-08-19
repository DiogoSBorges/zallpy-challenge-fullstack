import { Request, Response, Router } from "express";
import IController from "./../interfaces/controller.interface";

export class LoginController implements IController {
  public path = "/login";
  public router = Router();

  constructor() {
    this.iniciarRotas();
  }

  public iniciarRotas() {
    this.router.post(this.path, this.fazerLogin);
  }

  fazerLogin = (request: Request, response: Response) => {
    const body = request.body;
    console.log(body);

    response.send({ message: "login" });
  };
}
