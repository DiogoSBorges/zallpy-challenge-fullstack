import React, { Component } from "react";
import UsuarioProfileService from './../../services/usuario-profile.service';



class DashboardComponent extends Component {
  render() {
    return (
      <div id="footer">
        <h1>HELLO {UsuarioProfileService.obterUsuario().data.nome}</h1>
      </div>
    );
  }
}

export default DashboardComponent;