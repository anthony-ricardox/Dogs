import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../../Assents/dogs.svg?react";
import { UserContext } from "../../useContext";

const Header = () => {
  const { data, useLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.conteiner}`}>
        <Link className={styles.logo} to={"/"} aria-label="Dogs | Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to={"/conta"}>
            {data.nome}
            <button onClick={useLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to={"/login"}>
            Login | Criar
          </Link>
        )}
        
      </nav>
    </header>
  );
};

export default Header;
