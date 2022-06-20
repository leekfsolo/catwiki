import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../common/ui/components/loading";
import MainLayout from "../../common/ui/layout/main-layout";
import { doGetBreedImages } from "../api";
import { Breed } from "../home/model";

import styles from "./BreedDetail.module.scss";

const BreedDetail = () => {
  const [breed, setBreed] = useState<Breed>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    if (id && id.length > 0) {
      setIsLoading(true);
      const fetchData = async () => {
        const response = await doGetBreedImages(id);
        const responseData = response.data;
        const [image, ...photos] = responseData.map((data: any) => data.url);

        const breedData = responseData[0].breeds[0];

        setBreed({ image, photos, ...breedData });
        setIsLoading(false);
      };

      fetchData();
    }
  }, [id]);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      {breed && (
        <main>
          <section className={styles.breed}>
            <div className={styles["breed-img"]}>
              <img src={breed.image} alt={breed.name} />
            </div>
            <div className={styles["breed-info"]}>
              <h1>{breed.name}</h1>
            </div>
          </section>
          <section className={styles.photos}></section>
        </main>
      )}
    </MainLayout>
  );
};

export default BreedDetail;
