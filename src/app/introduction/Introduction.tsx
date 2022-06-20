import React from "react";
import MoreText from "../../common/ui/components/more-text";

import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.content}>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <MoreText text="read more" />
      </div>
      <div className={styles.grid}>
        <div className={styles.col}>
          <div className={styles.wrapper}>
            <img
              src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"
              alt=""
              className={styles["img-row"]}
            />
          </div>
          <div className={styles.wrapper}>
            <img
              src="https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"
              alt=""
              className={styles["img-col"]}
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrapper}>
            <img
              src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"
              alt=""
              className={styles["img-col"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
