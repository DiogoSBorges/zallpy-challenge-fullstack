import UsuarioProfileService from "./../services/usuario-profile.service";

class ApiRequestService {
  async postAsync(caminho, body, auth = true) {
    return await fetch(`${process.env.REACT_APP_APP_URL}/${caminho}`, {
      method: "POST",
      headers: this.getHeader(auth),
      body: JSON.stringify({ ...body })
    });
  }

  async getAsync(caminho, auth = true) {
    return await fetch(`${process.env.REACT_APP_APP_URL}/${caminho}`, {
      method: "GET",
      headers: this.getHeader(auth)
    });
  }

  getHeader(isAuth) {
    if (isAuth) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": UsuarioProfileService.obterUsuario().token
      };
    } else {
      return {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
  }
}

export default new ApiRequestService();
