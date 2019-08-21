import { HttpException } from "./http.exception";

export class ProjetoNaoEncontradoException extends HttpException {
    constructor(){
        super(400, "O projeto não foi encontrado.");
    }
}

export class ProjetoErroAoObterNaBaseDeDadosException extends HttpException {
    constructor(){
        super(400, "Ocorreu um erro ao tentar buscar projeto no banco de dados.");
    }
}

export class ProjetoUsuarioSemPermissaoException extends HttpException {
    constructor(){
        super(400, "Usuário não tem permissão para lançar horas nesse projeto.");
    }
}
