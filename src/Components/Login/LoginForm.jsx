import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
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
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type='text' label='Usuário' name='username'/>
        <Input type='password' label='Password' name='password'/>


        <button>Entrar</button>
      </form>

      <Link to={"login/criar"}>Cadrasto</Link>
    </section>
  );
};

export default LoginForm;
