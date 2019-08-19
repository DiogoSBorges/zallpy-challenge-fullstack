import { NextFunction, Request, Response } from "express";

function loggerHandler(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

export default loggerHandler;
