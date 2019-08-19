import UsuarioModel from "./../db/models/usuario.model";
import { UsuarioErroAoObterNaBaseDeDadosException } from "./../exceptions/usuario.exception";

export class UsuarioRepository {
  static obterPorEmailESenha :any = async (email: string, senha: string) =>{
    try {
      return await UsuarioModel.findOne({
        where: {
          email: email,
          senha: senha
        }
      });
    } catch (e) {
      throw new UsuarioErroAoObterNaBaseDeDadosException();
    }
  }
}
