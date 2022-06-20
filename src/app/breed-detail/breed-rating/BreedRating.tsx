import React, { FC } from "react";

import styles from "./BreedRating.module.scss";

interface Props {
  bKey: string;
  bValue: number;
}

const BreedRating: FC<Props> = (props: Props) => {
  let { bKey, bValue } = props;
  bKey = bKey.split("_").join(" ");

  let rating_bars: Array<any> = [];

  for (let i = 5, rate = bValue; i > 0; i--, rate--) {
    rating_bars.push(
      <div className={`${styles.bar} ${rate > 0 && styles.vote}`}></div>
    );
  }

  return (
    <div className={styles.content}>
      <p>
        <span>{bKey}: </span>
        <div className={styles.rating}>{rating_bars}</div>
      </p>
    </div>
  );
};

export default BreedRating;
