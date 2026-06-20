import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../useContext";
import userFetch from "../../Hooks/userFetch";

const LoginCreat = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
 const [loading, error, request] = userFetch()

  const { url, options } = USER_POST({
    username: username.value,
    email: email.value,
    password: password.value,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const {response} = await request(url, options);
    const data = await response.json();
    console.log("Resposta da API:", data);
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastra-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Email" type="email" name="email" {...email} />

        <Input label="Password" type="password" name="password" {...password} />
        <Button> Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreat;
