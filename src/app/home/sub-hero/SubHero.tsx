import React, { FC } from "react";
import { Link } from "react-router-dom";
import ImageSquareWrapper from "../../../common/ui/components/image-square-wrapper";
import MoreText from "../../../common/ui/components/more-text";
import { Breed } from "../model";

import styles from "./SubHero.module.scss";

interface Props {
  mostSearchedBreeds: Array<Breed>;
}

const SubHero: FC<Props> = (props: Props) => {
  const { mostSearchedBreeds } = props;

  return (
    <section className={styles["sub-hero"]}>
      <div className={styles.headings}>
        <h2>Most Searched Breeds</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <h3>66+ Breeds For you to discover</h3>
          <Link to="popular">
            <MoreText text="see more" />
          </Link>
        </div>

        <div className={styles.cards}>
          {mostSearchedBreeds &&
            mostSearchedBreeds.map((breed, idx) => (
              <div className={styles.card} key={idx}>
                <ImageSquareWrapper
                  url={breed.image}
                  alt={breed.name}
                  highlight={idx === 0}
                  size="sm"
                />
                <p>{breed.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SubHero;
