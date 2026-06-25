import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../useContext";

const UserHeaderNav = () => {
  const {useLogout} = React.useContext(UserContext)
  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatisca" >Estatística </NavLink>
      <NavLink to="/conta/postar">Adicionar Foto</NavLink>
      <button onClick={useLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
