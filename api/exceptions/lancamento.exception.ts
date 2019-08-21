import { HttpException } from "./http.exception";

export class LancamentoErroAoCadastrarException extends HttpException {
  constructor() {
    super(400, "Ocorreu erro ao cadastrar lancamento.");
  }
}
