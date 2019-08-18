import * as dotenv from "dotenv";
import { resolve } from "path";

let path;

switch (process.env.NODE_ENV) {
  case "docker":
    path = `${__dirname}/../../.env.docker`;
    break;  
  default:
    path = `${__dirname}/../../.env.development`;
}

dotenv.config({ path: resolve(path) });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
