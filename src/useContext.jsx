import React from "react";
import { TOKEN_POST, TOKEN_VALIDADE_POST, USER_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const useLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    },
    [navigate],
  );

  function stripHtml(html) {
    return String(html)
      .replace(/<[^>]*>/g, "")
      .trim();
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
      setError(null);
      setLoading(true);
      const tokenRes = await fetch(url, options);
      const tokenJson = await tokenRes.json();
      if (!tokenRes.ok || !tokenJson.token) {
        setError(stripHtml(tokenJson.message) || "Usuário ou senha inválidos");
        return;
      }
      const { token } = tokenJson;
      window.localStorage.setItem("token", token);
      await getUser(token);
      setTimeout(() => {
        navigate("/conta");
      }, 3000);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      try {
        setLoading(true);
        setError(null);
        console.log("=== AUTO LOGIN INICIADO ===");
        const token = window.localStorage.getItem("token");
        console.log("Token encontrado:", token);
        if (token) {
          console.log("Validando token...");
          const { url, options } = TOKEN_VALIDADE_POST(token);
          console.log("URL de validação:", url);
          const response = await fetch(url, options);
          const json = await response.json();
          console.log("Status da resposta:", response.status);
          console.log("Dados da validação:", json);
          if (response.ok) {
            console.log("✅ Token válido! Buscando dados do usuário...");
            await getUser(token);
          } else {
            console.log("❌ Token inválido, removendo do localStorage");
            window.localStorage.removeItem("token");
            setError(stripHtml(json.message) || "Token inválido");
          }
        } else {
          console.log("Nenhum token no localStorage");
        }
      } catch (error) {
        console.error("❌ Erro no autoLogin:", error);
        setError("Erro ao validar token");
        useLogout();
      } finally {
        setLoading(false);
      }
    }
    autoLogin();
  }, [useLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, useLogout, error, data, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UseStorage;
