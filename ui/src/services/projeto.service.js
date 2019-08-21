import ApiRequestService from "./api-request.service";

class ProjetoService {
  async obterPorUsuarioLogadoAsync() {
    var response = await ApiRequestService.getAsync(
      "projeto/obter-por-usuario-logado",
      true
    );

    var retorno = await response.json();

    if (!response.ok) {
      throw new Error(retorno.message);
    } else {
      return retorno;
    }
  }
}

export default new ProjetoService();