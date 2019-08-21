import { HttpException } from "./http.exception";

export class UsuarioProjetoPermissaoErroAoObterNaBaseDeDadosException extends HttpException {
  constructor() {
    super(
      400,
      "Ocorreu um erro ao tentar buscar permissão de usuário ao projeto no banco de dados."
    );
  }
}
