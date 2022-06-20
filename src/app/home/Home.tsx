import React, { useState } from "react";
import Loading from "../../common/ui/components/loading";
import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";
import Introduction from "./introduction";
import SubHero from "./sub-hero";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      <Hero />
      <SubHero setIsLoading={setIsLoading} />
      <Introduction />
    </MainLayout>
  );
};

export default App;
