import React from "react";
import Logo from "../../../components/logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo size="sm" variant="black" />
    </header>
  );
};

export default Header;
