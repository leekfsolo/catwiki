import React, { useState } from "react";
import ImageWrapper from "../../../common/ui/components/image-wrapper";
import MoreText from "../../../common/ui/components/more-text";
import { Breed } from "../model";

import styles from "./SubHero.module.scss";

const SubHero = () => {
  const [mostSearchedBreeds, setMostSearchedBreeds] = useState<Array<Breed>>([
    {
      image: "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
      name: "Bengal",
    },
    {
      image: "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
      name: "Bengal",
    },
    {
      image: "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
      name: "Bengal",
    },
    {
      image: "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
      name: "Bengal",
    },
  ]);

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
          {mostSearchedBreeds.map((breed, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.wrapper}>
                <ImageWrapper
                  url={breed.image}
                  alt={breed.name}
                  highlight={idx === 0}
                />
              </div>
              <p>{breed.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubHero;
