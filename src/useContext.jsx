import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function stripHtml(html) {
    return String(html).replace(/<[^>]*>/g, "").trim();
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) {
      setError(stripHtml(json.message) || "Erro ao buscar usuário");
      return;
    }
    setData(json);
    setLogin(true);
    console.log("Dados do usuário:", json);
  }

  async function userLogin(username, password) {
    setError(null);
    const { url, options } = TOKEN_POST({ username, password });
    try {
      const tokenRes = await fetch(url, options);
      const tokenJson = await tokenRes.json();
      if (!tokenRes.ok || !tokenJson.token) {
        setError(stripHtml(tokenJson.message) || "Usuário ou senha inválidos");
        return;
      }
      const { token } = tokenJson;
      window.localStorage.setItem("token", token);
      getUser(token);
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
      console.error(err);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, error , data}}>
      {children}
    </UserContext.Provider>
  );
};

export default UseStorage;
