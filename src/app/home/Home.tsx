import React, { useEffect, useState } from "react";
import Loading from "../../common/ui/components/loading";
import MainLayout from "../../common/ui/layout/main-layout";
import { doGetPopularBreeds } from "../api";
import Hero from "./hero";
import Introduction from "./introduction";
import { Breed } from "./model";
import SubHero from "./sub-hero";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [mostSearchedBreeds, setMostSearchedBreeds] = useState<Array<Breed>>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await doGetPopularBreeds(4);
      const responseData = response.data;
      const breedData = responseData.map((data: any) => {
        return { name: data.name, image: data.image.url, id: data.id };
      });

      setMostSearchedBreeds(breedData);
      setIsLoading(false);
    };

    fetchData();
  }, [setIsLoading]);

  return (
    <MainLayout isShowModal={isShowModal}>
      <Loading isOpen={isLoading} />
      <Hero setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      <SubHero mostSearchedBreeds={mostSearchedBreeds || []} />
      <Introduction mostSearchedBreeds={mostSearchedBreeds || []} />
    </MainLayout>
  );
};

export default App;
