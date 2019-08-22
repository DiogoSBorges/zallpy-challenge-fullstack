import React, { Component } from "react";

import ProjetoService from "../../../services/projeto.service";
import LoadingComponent from "../../loading/loading.component";

import M from "materialize-css";

import moment from "moment";

class FormularioLancarHorasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      horas: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let values = this.state;
    values[event.target.id] = event.target.value;
    this.setState({ ...values });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { data, horas } = this.state;
    if (data.length === 0 || horas === 0) {
      M.toast({ html: "Data e horas é obrigatório" });
      return;
    }

    try {
      this.setState({ isLoading: true });
      await ProjetoService.lancarHorasAsync(
        this.props.projetoId,
        moment(new Date(this.state.data)).format("AAAA-MM-DD"),
        this.state.horas
      );
      this.setState({ isLoading: false });
      M.toast({ html: "Horas lançadas com sucesso." });
      this.props.afterSubmit();
    } catch (error) {
      this.setState({
        isLoading: false
      });
      M.toast({ html: error.message });
    }
  }

  render() {
    return (
      <form className="center-align" onSubmit={this.handleSubmit}>
        <label>
          Horas:
          <input
            type="number"
            id="horas"
            value={this.state.value}
            validate="validate"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            id="data"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>

        {this.state.isLoading ? (
          <LoadingComponent />
        ) : (
          <button
            style={{ borderTop: "50px" }}
            className="btn waves-effect waves-light green"
            type="button"
            onClick={this.handleSubmit}
          >
            Lançar Horas
            <i className="material-icons right">send</i>
          </button>
        )}
      </form>
    );
  }
}

export default FormularioLancarHorasComponent;
