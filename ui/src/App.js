import React from "react";
import "./App.css";

import Main from "./components/main.component";

import { Provider } from "react-redux";
import { Store } from "./store";


import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

export default App;
