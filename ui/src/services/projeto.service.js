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

  async obterTodosAsync() {
    var response = await ApiRequestService.getAsync(
      "projeto/obter-todos",
      true
    );

    var retorno = await response.json();

    if (!response.ok) {
      throw new Error(retorno.message);
    } else {
      return retorno;
    }
  }

  async lancarHorasAsync(id, data, horas) {
    var response = await ApiRequestService.postAsync(
      `projeto/${id}/lancar-horas`,
      { data, horas },
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
