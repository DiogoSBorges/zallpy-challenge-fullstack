import { Response } from "express";
import { UsuarioRepository } from "./../repositories/usuario.repository";
import { TokenService } from "./../services/token.service";
import md5 from "md5";

export class FazerLoginService {
  static async fazerLogin(email: string, senha: string, response: Response) {

    try {
      const user = await UsuarioRepository.obterPorEmailESenha(
        email,
        md5(senha + process.env.APP_SECURITY)
      );

      if (!user) {
        response.status(404).send({
          message: "Usuário ou senha inválidos"
        });
        return;
      }

      const token = await TokenService.gerarToken({
        id: user.id,
        email: user.email,
        nome: user.nome,
        tipoId: user.tipoId
      });

      response.status(201).send({
        token,
        data: {
          email: user.email,
          nome: user.nome
        }
      });
    } catch (e) {
      response.status(500).send({
        message: "ERRO AO ACESSAR DATABASE: "+e.message
      });
    }
  }
}
