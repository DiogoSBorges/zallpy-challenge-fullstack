import { Request } from "express";

interface IRequest extends Request{
    usuario?:any
    id?: number
}

export default IRequest;