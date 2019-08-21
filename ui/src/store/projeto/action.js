import {
  OBTER_PROJETOS_ERROR,
  OBTER_PROJETOS_REQUESTING,
  OBTER_PROJETOS_SUCCESS
} from "./actionTypes";
import projetoService from "./../../services/projeto.service";

/* LIST ACTION */
export const carregarProjetosSucesso = list => {
  return {
    type: OBTER_PROJETOS_SUCCESS,
    projetos: list
  };
};

export const carregarProjetosRequestig = () => {
  return {
    type: OBTER_PROJETOS_REQUESTING
  };
};

export const carregarProjetosError = message => {
  return {
    type: OBTER_PROJETOS_ERROR,
    message: message
  };
};

/* LIST Actions Creator*/
export const carregarProjetos = () => {
  return async dispatch => {
    dispatch(carregarProjetosRequestig());
    try {
      let list = await projetoService.obterPorUsuarioLogadoAsync();
      return dispatch(carregarProjetosSucesso(list));
    } catch (error) {
        console.log("HHHHH");
      return dispatch(carregarProjetosError(error.message));
    }
  };
};
