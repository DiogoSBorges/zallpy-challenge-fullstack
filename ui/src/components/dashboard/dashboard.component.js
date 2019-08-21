import React, { Component } from "react";
import UsuarioProfileService from "./../../services/usuario-profile.service";

import LoadingComponent from './../loading/loading.component'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { carregarProjetos } from "./../../store/projeto/action";

import M from "materialize-css";

class DashboardComponent extends Component {
  componentWillMount() {
    this.props.carregarProjetos();
  }

  render() {
    if (this.props.isLoadError) {
      M.toast({ html: this.props.erroMessage });
    }

    return (
      <div>
        <h1>Ola {UsuarioProfileService.obterUsuario().data.nome}</h1>

        <h2>Seus Projetos</h2>
        <div className="row center-align">
          {this.props.isRequesting ? (
            <LoadingComponent/>
          ) : this.props.isLoadSuccess ? (
            this.props.projetos.map((n, i) => (
              <h3>
                Projeto: {n.nome} - Horas:{n.horas}
              </h3>
            ))
          ) : (
            <h1>{this.props.erroMessage}</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  projetos: store.projetoReducer.listaProjeto.projetos,
  isRequesting: store.projetoReducer.listaProjeto.isRequesting,
  isLoadSuccess: store.projetoReducer.listaProjeto.isLoadSuccess,
  isLoadError: store.projetoReducer.listaProjeto.isLoadError,
  erroMessage: store.projetoReducer.listaProjeto.erroMessage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ carregarProjetos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);
