import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../useContext";
import MinhasFotos from "../../Assents/feed.svg?react";
import Estatistica from "../../Assents/estatisticas.svg?react";
import AdicionarFotos from "../../Assents/adicionar.svg?react";
import Sair from "../../Assents/sair.svg?react";
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const { useLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null)
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">
        <MinhasFotos /> {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to="/conta/estatisca">
        <Estatistica /> {mobile && 'Estatística'}
      </NavLink>

      <NavLink to="/conta/postar">
        <AdicionarFotos /> {mobile && 'Adicionar Foto'} 
      </NavLink>
      <button onClick={useLogout}>
        <Sair /> {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
