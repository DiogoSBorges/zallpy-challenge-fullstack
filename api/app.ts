import errorHandler from "./handlers/error.handler";
import loggerHandler from "./handlers/logger.handler.";
import IController from "./interfaces/controller.interface";

import "./environment";

import express from "express";

export class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();

    this.iniciarMiddlewares();
    this.iniciarController(controllers);
  }

  public iniciarMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(loggerHandler);
    this.app.use(errorHandler);
  }

  private iniciarController(controllers: IController[]) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }
}
