import React from "react";
import Logo from "../../../components/logo";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo variant="white" />

      <p className={styles.footer_text}>
        <span className={styles.icon}>&copy;</span> created by{" "}
        <span className={styles.author}>username</span> - devChallenge.io 2021
      </p>
    </footer>
  );
};

export default Footer;
