import { FazerLoginService } from "../fazer-login.service";
import { UsuarioRepository } from "../../../repositories/usuario.repository";
import { TokenService } from "../../../services/token.service";
import { UsuarioEmailOuSenhaInvalidosException } from "../../../exceptions/usuario.exception";

const Usuario = {
  email: "email@email.com",
  senha: "aaaa",
  nome: "Diogo",
  tipoId: 1,
  token: "Token"
};

describe("FazerLoginService", () => {
  const fazerLoginService = FazerLoginService;
  describe("Quando fazer login", () => {
    it("Objeto deve possuir dados corretos", async () => {
      const UsuarioRepositoryMock = jest.spyOn(
        UsuarioRepository,
        "obterPorEmailESenha"
      );

       UsuarioRepositoryMock.mockImplementation(() => {
        return Promise.resolve({
          id: 1,
          email: Usuario.email,
          nome: Usuario.nome,
          senha: Usuario.senha,
          tipoId: Usuario.tipoId
        });
      });

      const TokenServiceMock = jest.spyOn(TokenService, "gerarToken");
       TokenServiceMock.mockImplementation(() => {
        return Promise.resolve(Usuario.token);
      });
      
      fazerLoginService.fazerLogin(
        Usuario.email,
        Usuario.senha
      ).then(resultado => {
        expect(resultado.token).toEqual(Usuario.token);
        expect(resultado.data.email).toEqual(Usuario.email);
        expect(resultado.data.nome).toEqual(Usuario.nome);
        expect(resultado.data.tipoId).toEqual(Usuario.tipoId);
      });      
    });    
    it("Deve lançar exception quando não encontrar pessoa", async () => {
      const UsuarioRepositoryMock = jest.spyOn(
        UsuarioRepository,
        "obterPorEmailESenha"
      );
      UsuarioRepositoryMock.mockImplementation(() => {
        return Promise.resolve(null);
      });
      try {
        await fazerLoginService.fazerLogin(Usuario.email, Usuario.senha);
      } catch (erro) {
        expect(erro.message).toEqual(
          new UsuarioEmailOuSenhaInvalidosException().message
        );
      }
    });
  });
});
