import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageSquareWrapper from "../../common/ui/components/image-square-wrapper";
import Loading from "../../common/ui/components/loading";
import MainLayout from "../../common/ui/layout/main-layout";
import { doGetBreedImages } from "../api";
import { Breed } from "../home/model";
import BreedRating from "./breed-rating";

import styles from "./BreedDetail.module.scss";

const BreedDetail = () => {
  const [breed, setBreed] = useState<Breed>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { breed_id } = useParams();
  const navigate = useNavigate();

  let breed_num_data: Array<any> = [];
  if (breed) {
    if (breed.rating) {
      breed_num_data = Object.entries(breed.rating).map(
        ([bKey, bValue], idx) => (
          <BreedRating bKey={bKey} bValue={bValue} key={idx} />
        )
      );
    }
  }

  useEffect(() => {
    if (breed_id && breed_id.length > 0) {
      setIsLoading(true);
      const fetchData = async () => {
        const response = await doGetBreedImages(breed_id);
        const responseData = response.data;

        if (responseData.length === 0) {
          setIsLoading(false);
          alert("Your breed is not found");
          navigate("/", { replace: true });
        }

        const [image, ...photos] = responseData.map((data: any) => data.url);

        const breedData = responseData[0].breeds[0];
        const {
          description,
          name,
          id,
          adaptability,
          affection_level,
          child_friendly,
          grooming,
          health_issues,
          intelligence,
          life_span,
          origin,
          social_needs,
          stranger_friendly,
          temperament,
        } = breedData;

        setBreed({
          image,
          photos,
          description,
          name,
          id,
          life_span,
          origin,
          temperament,
          rating: {
            adaptability,
            affection_level,
            child_friendly,
            grooming,
            health_issues,
            intelligence,
            social_needs,
            stranger_friendly,
          },
        });
        setIsLoading(false);
      };

      fetchData();
    }
  }, [breed_id]);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      {breed && (
        <main>
          <section className={styles.breed}>
            <div className={styles["breed-img"]}>
              <ImageSquareWrapper
                url={breed.image}
                alt={breed.name}
                highlight
                size="lg"
              />
            </div>
            <div className={styles["breed-info"]}>
              <h1>{breed.name}</h1>
              <p className={styles.description}>{breed.description}</p>

              <div className={styles.detail}>
                <p>
                  <span>Temperament: </span>
                  {breed.temperament}
                </p>
                <p>
                  <span>Origin: </span>
                  {breed.origin}
                </p>
                <p>
                  <span>Life Span: </span>
                  {breed.life_span} years
                </p>
                {breed_num_data}
              </div>
            </div>
          </section>
          <section className={styles.photos}>
            <h2>Other Photos</h2>
            <div className={styles.list}>
              {breed &&
                breed.photos &&
                breed.photos.map((photo, idx) => (
                  <ImageSquareWrapper url={photo} alt="" key={idx} size="md" />
                ))}
            </div>
          </section>
        </main>
      )}
    </MainLayout>
  );
};

export default BreedDetail;
