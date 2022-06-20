import React from "react";

import catLogo from "../../common/ui/assets/images/cat-hero.png";
import { ReactComponent as Search } from "../../common/ui/assets/images/search.svg";
import Logo from "../../common/ui/components/logo";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Logo size="lg" variant="white" />
        <p className={styles.title}>Get to know more about your cat breed</p>
        <form>
          <input type="text" placeholder="Enter your breed" />
          <Search />
        </form>
      </div>
      <img src={catLogo} alt="" className={styles.img} />
    </section>
  );
};

export default Hero;
