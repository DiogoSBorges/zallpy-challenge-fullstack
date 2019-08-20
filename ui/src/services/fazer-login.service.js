class LoginService {
  async fazerLoginAsync(email, senha) {

    const response = await fetch(`${process.env.REACT_APP_APP_URL}/login`,{
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            senha
        })
      });

    if (!response.ok) {
        throw new Error(`APP failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}

export default new LoginService();
