import { HttpException } from "./http.exception";

export class AppAcessoRestritoException extends HttpException {
  constructor() {
    super(401, "Acesso Restrito !!!.");
  }
}

export class AppTokenInvalidoException extends HttpException {
  constructor() {
    super(401, "Token Inválido!!!.");
  }
}

export class AppUsuarioSemPermissaoException extends HttpException {
  constructor() {
    super(403, "Usuário não tem permissão para acessar rota.");
  }
}