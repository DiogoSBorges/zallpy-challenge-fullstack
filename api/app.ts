import errorHandler from "./handlers/error.handler";
import loggerHandler from "./handlers/logger.handler.";
import IController from "./interfaces/controller.interface";

import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

import "./environment";

import express from "express";

export default class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();

    this.iniciarMiddlewares();
    this.iniciarController(controllers);
    this.iniciarSwagger();   
    this.iniciarErrorHandler() 
  }
    

  private iniciarMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(loggerHandler);
  }

  private iniciarErrorHandler(){
    this.app.use(errorHandler);
  
  }

  private iniciarController(controllers: IController[]) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }

  private iniciarSwagger() {
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
}
