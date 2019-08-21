import {
  OBTER_PROJETOS_ERROR,
  OBTER_PROJETOS_REQUESTING,
  OBTER_PROJETOS_SUCCESS
} from "./actionTypes";

const initialState = {
  listaProjeto: {
    projetos: [],
    isLoadSuccess: false,
    isRequesting: false,
    isLoadError: false,
    erroMessage: ""
  }
};

export const projetoReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTER_PROJETOS_REQUESTING:
      return {
        ...state,
        listaProjeto: {
          ...state.listaProjeto,
          projetos: [],
          isLoadSuccess: false,
          isRequesting: true,
          isLoadError: false,
          erroMessage: ""
        }
      };
    case OBTER_PROJETOS_SUCCESS:
      return {
        ...state,
        listaProjeto: {
          ...state.listaProjeto,
          projetos: action.projetos,
          isLoadSuccess: true,
          isRequesting: false,
          isLoadError: false,
          erroMessage: ""
        }
      };
    case OBTER_PROJETOS_ERROR:
      return {
        ...state,
        listaProjeto: {
          ...state.listaProjeto,
          projetos: [],
          isLoadSuccess: false,
          isRequesting: false,
          isLoadError: true,
          erroMessage: action.message
        }
      };
    default:
      return state;
  }
};
