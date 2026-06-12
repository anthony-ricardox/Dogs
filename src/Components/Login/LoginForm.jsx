import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../useContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error , loading} = React.useContext(UserContext);
 
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Password" name="password" {...password} />
       
        {loading ? <Button disabled> Carregando</Button>: <Button> Entrar</Button> }
        
        {error && <p style={{ color: "#f31", marginTop: "0.5rem" }}>{error}</p>}
      </form>

      <Link to={"login/criar"}>Cadrasto</Link>
    </section>
  );
};

export default LoginForm;
