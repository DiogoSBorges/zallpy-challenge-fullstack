import { UsuarioRepository } from "../../repositories/usuario.repository";
import { ProjetoRepository } from "../../repositories/projeto.repository";
import { LancamentoRepository } from "../../repositories/lancamento.repository";
import { UsuarioProjetoPermissaoRepository } from "../../repositories/usuario-projeto-permissao.repository";
import {
  ProjetoNaoEncontradoException,
  ProjetoUsuarioSemPermissaoException
} from "../../exceptions/projeto.exception";
import { UsuarioNaoEncontradoException } from "../../exceptions/usuario.exception";

export class LancarHorasService {
  static async lancarHoras(
    projetoId: number,
    usuarioId: number,
    horas: number,
    data: Date
  ) {
    const projeto = await ProjetoRepository.obterPorId(projetoId);
    if (!projeto) {
      throw new ProjetoNaoEncontradoException();
    }

    const user = await UsuarioRepository.obterPorId(usuarioId);
    if (!user) {
      throw new UsuarioNaoEncontradoException();
    }

    const qtdPermissao = await UsuarioProjetoPermissaoRepository.obterContagemPorUsuarioEProjeto(
      usuarioId,
      projetoId
    );

    if (qtdPermissao !== 1) {
      throw new ProjetoUsuarioSemPermissaoException();
    }

    return await LancamentoRepository.criarAsync(projetoId, usuarioId, horas, data);
  }
}
