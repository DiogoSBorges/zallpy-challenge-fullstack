import { HttpException } from "./http.exception";

export class UsuarioNaoEncontradoException extends HttpException {
  constructor() {
    super(400, "Usuário não encontrado !!");
  }
}

export class UsuarioEmailOuSenhaInvalidosException extends HttpException {
    constructor(){
        super(400, "Usuário ou senha inválidos");
    }
}

export class UsuarioErroAoObterNaBaseDeDadosException extends HttpException {
    constructor(){
        super(400, "Ocorreu um erro ao tentar buscar usuário no banco de dados.");
    }
}
