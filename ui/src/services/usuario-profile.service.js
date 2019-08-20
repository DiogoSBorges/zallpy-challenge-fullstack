class UsuarioProfileService {
  static saveUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static removeUser() {
    sessionStorage.removeItem("user");
  }

  static isAuthenticated() {
    let user = sessionStorage.getItem("user");
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }

  static isAuthorized(roles) {
    if (this.isAuthenticated()) {
      if (!roles) return false;

      const user = JSON.parse(sessionStorage.getItem("user"));

      var userRole = user.data.tipoId === 1 ? 'admin': 'user';
      
        if(roles.indexOf(userRole)  !== -1){
          return true;
        }else{
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
