class UsuarioProfileService {
  static salvarUsuario(usuario) {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  }

  static obterUsuario() {
    if (this.isAutenticado()) {
      return JSON.parse(sessionStorage.getItem("usuario"));      
    }
    return null;
  }

  static removerUsuario() {
    sessionStorage.removeItem("usuario");
  }

  static isAutenticado() {
    const usuario = sessionStorage.getItem("usuario");
    if (usuario != null) {
      return true;
    } else {
      return false;
    }
  }

  static isAutorizado(roles) {
    if (this.isAutenticado()) {
      if (!roles) return false;

      const usuario = JSON.parse(sessionStorage.getItem("usuario"));

      var userRole = usuario.data.tipoId === 1 ? "admin" : "user";

      if (roles.indexOf(userRole) !== -1) {
        return true;
      } else {
        return false;
      }

      /*const countAllowed = Object.values(roles).filter(
        x => user.roles.indexOf(x) !== -1
      ).length;
      return countAllowed !== 0;
      */
    } else {
      return false;
    }
  }
}

export default UsuarioProfileService;
