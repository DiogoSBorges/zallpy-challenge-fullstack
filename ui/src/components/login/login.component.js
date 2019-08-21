import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import LoginService from "./../../services/fazer-login.service";

import LoadingComponent from "./../loading/loading.component";

import M from "materialize-css";

const styles = {
  backgroundCard: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "15px",
    height: "450px",
    padding: "6% 15%"
  },
  label: {
    color: "white",
    fontSize: "20px"
  },
  input: {
    color: "white"
  }
};

class AppLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isLoading: false,
      loginSuccess: false
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

    const { login, password } = this.state;
    if (login.length === 0 || password.length === 0) {
      M.toast({ html: "Login e senha obrigatórios" });
      return;
    }

    try {
      this.setState({ isLoading: true });
      await LoginService.fazerLoginAsync(this.state.login, this.state.password);
      this.setState({ isLoading: false, loginSuccess: true });
    } catch (error) {
      this.setState({
        isLoading: false,
        loginSuccess: false
      });
      M.toast({ html: error.message });
    }
  }

  render() {
    if (this.state.loginSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <div className="col">
        <div
          style={{
            paddingBottom: "14%",
            paddingTop: "5%",
            paddingLeft: "15%",
            paddingRight: "15%"
          }}
        >
          <div style={styles.backgroundCard}>
            <form className="center-align" onSubmit={this.handleSubmit}>
              <label style={styles.label}>
                Email:
                <input
                  style={styles.input}
                  type="email"
                  id="login"
                  value={this.state.value}
                  validate="validate"
                  onChange={this.handleChange}
                />
              </label>
              <label style={styles.label}>
                Senha:
                <input
                  style={styles.input}
                  type="password"
                  id="password"
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
                  Entrar
                  <i className="material-icons right">send</i>
                </button>
              )}
            </form>
            <div className="center-align" style={{ color: "white" }}>
              <h5>
                <b>Lista de Usuários</b>
              </h5>
              <h6>
                <b>Usuário:</b> admin@email.com - <b>Senha:</b> admin
              </h6>
              <h6>
                <b>Usuário:</b> dev1@email.com - <b>Senha:</b> dev1
              </h6>
              <h6>
                <b>Usuário:</b> dev2@email.com - <b>Senha:</b> dev2
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppLogin;
