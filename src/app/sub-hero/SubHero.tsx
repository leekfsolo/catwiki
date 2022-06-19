import React from "react";
import MoreText from "../../common/ui/components/MoreText";

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
          <MoreText text="see more" />
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg"
                alt=""
              />
            </div>
            <p>Bengal</p>
          </div>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg"
                alt=""
              />
            </div>
            <p>Bengal</p>
          </div>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg"
                alt=""
              />
            </div>
            <p>Bengal</p>
          </div>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://cdn2.thecatapi.com/images/byQhFO7iV.jpg"
                alt=""
              />
            </div>
            <p>Bengal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
