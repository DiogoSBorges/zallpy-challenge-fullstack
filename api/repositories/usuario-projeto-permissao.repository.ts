import UsuarioProjetoPermissaoModel from "../db/models/usuario-projeto-permissao.model";
import { UsuarioProjetoPermissaoErroAoObterNaBaseDeDadosException } from "../exceptions/usuario-projeto-permissao.exception";

export class UsuarioProjetoPermissaoRepository {
  static obterContagemPorUsuarioEProjeto: any = async (usuarioId: number, projetoId: number) => {
    try {
      return await UsuarioProjetoPermissaoModel.count({
        where: {
          projetoId: projetoId,
          usuarioId: usuarioId
        }
      });
    } catch (e) {
      throw new UsuarioProjetoPermissaoErroAoObterNaBaseDeDadosException();
    }
  };
  
}
