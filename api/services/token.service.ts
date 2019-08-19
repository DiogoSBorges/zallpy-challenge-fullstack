import jwt from "jsonwebtoken";

export class TokenService {

    static async gerarToken(data:any){
         return await jwt.sign(data,  process.env.APP_SECURITY as string, { expiresIn: '1d' });
     };

   static async decodificarToken(token:any){
        return await jwt.verify(token, process.env.APP_SECURITY as string);
   };
}