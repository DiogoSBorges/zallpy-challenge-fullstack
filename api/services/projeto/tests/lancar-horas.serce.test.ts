import { LancarHorasService } from "../lancar-horas.service";
import { ProjetoRepository } from "../../../repositories/projeto.repository";
import { UsuarioRepository } from "../../../repositories/usuario.repository";
import { UsuarioProjetoPermissaoRepository } from "../../../repositories/usuario-projeto-permissao.repository";
import { LancamentoRepository } from "../../../repositories/lancamento.repository";
import { UsuarioNaoEncontradoException } from "../../../exceptions/usuario.exception";
import {
  ProjetoNaoEncontradoException,
  ProjetoUsuarioSemPermissaoException
} from "../../../exceptions/projeto.exception";

describe("FazerLoginService", () => {
  const lancarHorasService = LancarHorasService;
  describe("Quando lançar horas", () => {
    it("Objeto deve acontecer sem erro", async () => {
      let chegouNoFinal = false;

      const ProjetoRepositoryMock = jest.spyOn(ProjetoRepository, "obterPorId");
      ProjetoRepositoryMock.mockImplementation(() => {
        return Promise.resolve({});
      });

      const UsuarioRepositoryMock = jest.spyOn(UsuarioRepository, "obterPorId");
      UsuarioRepositoryMock.mockImplementation(() => {
        return Promise.resolve({});
      });

      const UsuarioProjetoPermissaoRepositoryMock = jest.spyOn(
        UsuarioProjetoPermissaoRepository,
        "obterContagemPorUsuarioEProjeto"
      );
      UsuarioProjetoPermissaoRepositoryMock.mockImplementation(() => {
        return Promise.resolve(1);
      });

      const LancamentoRepositoryMock = jest.spyOn(
        LancamentoRepository,
        "criarAsync"
      );
      LancamentoRepositoryMock.mockImplementation(() => {
        return Promise.resolve();
      });

      await lancarHorasService.lancarHoras(1, 1, 1);

      chegouNoFinal = true;

      expect(chegouNoFinal).toEqual(true);
    });
    it("Deve lançar exception quando usuário não tiver permissão", async () => {
      const ProjetoRepositoryMock = jest.spyOn(ProjetoRepository, "obterPorId");
      ProjetoRepositoryMock.mockImplementation(() => {
        return Promise.resolve({});
      });

      const UsuarioRepositoryMock = jest.spyOn(UsuarioRepository, "obterPorId");
      UsuarioRepositoryMock.mockImplementation(() => {
        return Promise.resolve({});
      });

      const UsuarioProjetoPermissaoRepositoryMock = jest.spyOn(
        UsuarioProjetoPermissaoRepository,
        "obterContagemPorUsuarioEProjeto"
      );
      UsuarioProjetoPermissaoRepositoryMock.mockImplementation(() => {
        return Promise.resolve(0);
      });

      try {
        await lancarHorasService.lancarHoras(1, 1, 1);
      } catch (erro) {
        expect(erro.message).toEqual(
          new ProjetoUsuarioSemPermissaoException().message
        );
      }
    });
    it("Deve lançar exception quando não encontrar usuário", async () => {
      const ProjetoRepositoryMock = jest.spyOn(ProjetoRepository, "obterPorId");
      ProjetoRepositoryMock.mockImplementation(() => {
        return Promise.resolve({});
      });

      const UsuarioRepositoryMock = jest.spyOn(UsuarioRepository, "obterPorId");
      UsuarioRepositoryMock.mockImplementation(() => {
        return Promise.resolve(null);
      });

      try {
        await lancarHorasService.lancarHoras(1, 1, 1);
      } catch (erro) {
        expect(erro.message).toEqual(
          new UsuarioNaoEncontradoException().message
        );
      }
    });
    it("Deve lançar exception quando não encontrar projeto", async () => {
      const ProjetoRepositoryMock = jest.spyOn(ProjetoRepository, "obterPorId");
      ProjetoRepositoryMock.mockImplementation(() => {
        return Promise.resolve(null);
      });

      try {
        await lancarHorasService.lancarHoras(1, 1, 1);
      } catch (erro) {
        expect(erro.message).toEqual(
          new ProjetoNaoEncontradoException().message
        );
      }
    });
  });
});
