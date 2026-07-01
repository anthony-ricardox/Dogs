/**
 * URLs e opções de requisição para o backend WordPress REST API.
 */
export const API_URL = "https://dogsapi.origamid.dev/json";

/**
 * Retorna configuração para requisição de autenticação por usuário e senha.
 */
export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

/**
 * Retorna configuração para validação de token JWT existente.
 */
export function TOKEN_VALIDADE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({}),
    },
  };
}

/**
 * Retorna configuração para busca de dados do usuário autenticado.
 */
export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}


export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "Post",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}