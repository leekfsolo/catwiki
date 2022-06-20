import React from "react";

import catLogo from "../../../common/ui/assets/images/cat-hero.png";
import Logo from "../../../common/ui/components/logo";
import SearchBar from "./search-bar";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Logo size="lg" variant="white" />
        <p className={styles.title}>Get to know more about your cat breed</p>

        <SearchBar />
      </div>
      <img src={catLogo} alt="" className={styles.img} />
    </section>
  );
};

export default Hero;
