import React from "react";

import catLogo from "../../common/ui/assets/images/cat-hero.png";
import { ReactComponent as Search } from "../../common/ui/assets/images/search.svg";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          CatWiki{" "}
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Cat_silhouette.svg"
              alt=""
            />
          </span>
        </h1>
        <p>Get to know more about your cat breed</p>
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
