import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
  }
  return (
    <section>
      <p>Login Form</p>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <button >Entrar</button>
      </form>

      <Link to={"login/criar"}>Cadrasto</Link>
    </section>
  );
};

export default LoginForm;
