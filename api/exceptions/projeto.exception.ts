import { HttpException } from "./http.exception";

export class ProjetoErroAoObterNaBaseDeDadosException extends HttpException {
    constructor(){
        super(400, "Ocorreu um erro ao tentar buscar projeto no banco de dados.");
    }
}
