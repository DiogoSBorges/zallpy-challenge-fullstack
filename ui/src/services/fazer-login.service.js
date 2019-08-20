import ApiRequestService from "./api-request.service";
import UsuarioProfileService from "./usuario-profile.service";

class LoginService {
  async fazerLoginAsync(email, senha) {
    var response = await ApiRequestService.postAsync(
      "login",
      { email, senha },
      false
    );
    var retorno = await response.json();

    if (!response.ok) {
      throw new Error(retorno.message);
    } else {
      UsuarioProfileService.salvarUsuario(retorno);
    }
  }
}

export default new LoginService();
