import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../../Assents/dogs.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
    <nav className={`${styles.nav} ${styles.conteiner}`}>
        <Link className={styles.logo} to={"/"} aria-label="Dogs | Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to={"/login"}>Login | Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
