import { projetoReducer } from "./projeto/reducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
  projetoReducer: projetoReducer
});
