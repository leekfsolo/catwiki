import React from "react";

import { ReactComponent as ArrowRight } from "../../common/ui/assets/images/arrow-right.svg";

import styles from "./SubHero.module.scss";

const SubHero = () => {
  return (
    <section className={styles["sub-hero"]}>
      <div className={styles.headings}>
        <h2>Most Searched Breeds</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <h3>66+ Breeds For you to discover</h3>
          <span>
            see more <ArrowRight />
          </span>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg" alt="" />
            <p>Bengal</p>
          </div>
          <div className={styles.card}>
            <img src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg" alt="" />
            <p>Bengal</p>
          </div>
          <div className={styles.card}>
            <img src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg" alt="" />
            <p>Bengal</p>
          </div>
          <div className={styles.card}>
            <img src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg" alt="" />
            <p>Bengal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
