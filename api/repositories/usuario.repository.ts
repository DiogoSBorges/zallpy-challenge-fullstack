import UsuarioModel from "./../db/models/usuario.model";

export class UsuarioRepository {
  static async obterPorEmailESenha(email: string, senha: string) {
    return await UsuarioModel.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
  }
}
