import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import logo from "./../../assets/zallpy_logo.png";

import UsuarioProfileService from "./../../services/usuario-profile.service";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sair: false
    };
  }

  sair() {
    UsuarioProfileService.removerUsuario();
    this.setState({ sair: true });
  }

  render() {
    if (this.state.sair) {
      return <Redirect to="/login" />;
    }
    return (
      <header>
        <nav style={{ backgroundColor: "#262626" }} role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="/" className="brand-logo">
              <img alt="zallpy" style={{ width: "140px" }} src={logo} />
            </Link>
            <ul className="right hide-on-med-and-down">
              {UsuarioProfileService.isAutenticado() ? (
                <div>
                  <li>
                    <Link className="sidenav-close" to="/">
                      Projetos
                    </Link>
                  </li>

                  {UsuarioProfileService.obterUsuario().data.tipoId === 1 ? (
                    <li>
                      <Link className="sidenav-close" to="/admin">
                        Todos Projetos
                      </Link>
                    </li>
                  ) : (
                    <li />
                  )}
                  <li>
                    <div className="sidenav-close">
                      Sr(a). {UsuarioProfileService.obterUsuario().data.nome}
                      <button
                        type="button"
                        title="Sair"
                        onClick={() => this.sair()}
                        className="btn btn-small waves-effect waves-light btn modal-trigger trigger-modal btn-floating waves-effect waves-light green"
                      >
                        <i className="material-icons">exit_to_app</i>
                      </button>
                    </div>
                  </li>
                </div>
              ) : (
                <li>
                  <Link className="sidenav-close" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <ul id="nav-mobile" className="sidenav">
              {UsuarioProfileService.isAutenticado() ? (
                <div>
                  <li>
                    <Link className="sidenav-close" to="/">
                      Projetos
                    </Link>
                  </li>

                  {UsuarioProfileService.obterUsuario().data.tipoId === 1 ? (
                    <li>
                      <Link className="sidenav-close" to="/admin">
                        Todos Projetos
                      </Link>
                    </li>
                  ) : (
                    <li />
                  )}
                  <li>
                    <div className="sidenav-close">
                      Sr(a). {UsuarioProfileService.obterUsuario().data.nome}
                      <button
                        type="button"
                        title="Sair"
                        onClick={() => this.sair()}
                        className="btn btn-small waves-effect waves-light btn modal-trigger trigger-modal btn-floating waves-effect waves-light green"
                      >
                        <i className="material-icons">exit_to_app</i>
                      </button>
                    </div>
                  </li>
                </div>
              ) : (
                <li>
                  <Link className="sidenav-close" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <a data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
