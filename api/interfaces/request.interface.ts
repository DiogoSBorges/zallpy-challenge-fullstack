import { Request } from "express";

interface IRequest extends Request{
    usuario?:any
}

export default IRequest;