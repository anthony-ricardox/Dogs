import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../useContext";
import MinhasFotos from "../../Assents/feed.svg?react";
import Estatistica from "../../Assents/estatisticas.svg?react";
import AdicionarFotos from "../../Assents/adicionar.svg?react";
import Sair from "../../Assents/sair.svg?react";

const UserHeaderNav = () => {
  const { useLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotos /> Minhas Fotos
      </NavLink>

      <NavLink to="/conta/estatisca">
        <Estatistica /> Estatística
      </NavLink>

      <NavLink to="/conta/postar">
        <AdicionarFotos /> Adicionar Foto
      </NavLink>
      <button onClick={useLogout}>
        <Sair /> Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
