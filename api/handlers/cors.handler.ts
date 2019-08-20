import { NextFunction, Request, Response } from "express";

function corsHandler(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
}

export default corsHandler;
