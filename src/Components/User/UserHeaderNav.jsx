import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../useContext";
import MinhasFotos from "../../Assents/feed.svg?react";
import Estatistica from "../../Assents/estatisticas.svg?react";
import AdicionarFotos from "../../Assents/adicionar.svg?react";
import Sair from "../../Assents/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import UserMedia from "../../Hooks/UserMedia";

const UserHeaderNav = () => {
  const { useLogout } = React.useContext(UserContext);
  const mobile = UserMedia("(max-width: 40rem");
  console.log(mobile);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const navigate = useNavigate();
  function handleLogout() {
    useLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
         
        </button>
      )}

      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <MinhasFotos /> {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="/conta/estatisca">
          <Estatistica /> {mobile && "Estatística"}
        </NavLink>

        <NavLink to="/conta/postar">
          <AdicionarFotos /> {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
