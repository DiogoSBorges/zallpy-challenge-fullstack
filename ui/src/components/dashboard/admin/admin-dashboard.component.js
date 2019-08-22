import React, { Component } from "react";

import LoadingComponent from "../../loading/loading.component";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { carregarTodosProjetos } from "../../../store/projeto/action";

import M from "materialize-css";
import moment from "moment";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.carregarTodosProjetos();
  }

  render() {
    if (this.props.isLoadError) {
      M.toast({ html: this.props.erroMessage });
    }
    return (
      <div>
        <div className="center-align">
          <h3>Todos Projetos</h3>
          {this.props.isRequesting ? (
            <LoadingComponent />
          ) : this.props.isLoadSuccess ? (
            <div style={{ padding: "1% 5% 5% 10%" }}>
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Horas</th>
                    <th>Data Criação</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.projetos.map((n, i) => (
                    <tr key={i}>
                      <td>{n.nome}</td>
                      <td>{n.horas}</td>
                      <td>{moment(n.createdAt).format("DD/MM/YYYY")}</td>                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
  bindActionCreators({ carregarTodosProjetos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);
