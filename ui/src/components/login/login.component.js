import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import LoginService from "./../../services/fazer-login.service";
import UsuarioProfileService from "./../../services/usuario-profile.service";

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

    try {
      this.setState({ isLoading: true });
      var user = await LoginService.fazerLoginAsync(
        this.state.login,
        this.state.password
      );
      UsuarioProfileService.saveUser(user);
      this.setState({ isLoading: false, loginSuccess: true });
    } catch (error) {
      this.setState({ isLoading: false, loginSuccess:false});
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Carregando</h1>;
    }
    if (this.state.loginSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Login:
            <input
              type="email"
              id="login"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              id="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AppLogin;
