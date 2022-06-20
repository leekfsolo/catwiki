import React, { useEffect, useState } from "react";
import ImageSquareWrapper from "../../common/ui/components/image-square-wrapper";
import Loading from "../../common/ui/components/loading";
import MainLayout from "../../common/ui/layout/main-layout";
import { doGetPopularBreeds } from "../api";
import { Breed } from "../home/model";

import styles from "./Popular.module.scss";

const Popular = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<Array<Breed>>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await doGetPopularBreeds(10);
      const responseData = response.data;
      const breedData = responseData.map((data: any) => {
        return {
          name: data.name,
          image: data.image.url,
          description: data.description,
        };
      });

      setBreeds(breedData);
      setIsLoading(false);
    };

    fetchData();
  }, [setBreeds]);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      <section className={styles.popular}>
        <h1>Top 10 most searched breeds</h1>
        <div className={styles.content}>
          {breeds.map((breed, idx) => (
            <div key={idx} className={styles.breed}>
              <ImageSquareWrapper
                size="xs"
                url={breed.image}
                alt={breed.name}
              />
              <div className={styles.description}>
                <h2>{`${idx + 1}. ${breed.name}`}</h2>
                <p>{breed.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Popular;
