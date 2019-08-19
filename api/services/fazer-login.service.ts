import { UsuarioRepository } from "./../repositories/usuario.repository";
import { TokenService } from "./../services/token.service";
import { UsuarioEmailOuSenhaInvalidosException } from "./../exceptions/usuario.exception";
import md5 from "md5";

export class FazerLoginService {
  static async fazerLogin(email: string, senha: string) {
    const user = await UsuarioRepository.obterPorEmailESenha(
      email,
      md5(senha + process.env.APP_SECURITY)
    );

    if (!user) {
      throw new UsuarioEmailOuSenhaInvalidosException();
    }

    const token = await TokenService.gerarToken({
      id: user.id,
      email: user.email,
      nome: user.nome,
      tipoId: user.tipoId
    });

    return {
      token,
      data: {
        email: user.email,
        nome: user.nome,
        tipoId: user.tipoId
      }
    };
  }
}
