import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreat from "./LoginCreat";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import LoginPasswordReset from "./LoginPasswordReset.jsx";
import {UserContext} from '../../useContext.jsx'

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreat />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
