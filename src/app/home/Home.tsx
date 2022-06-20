import React from "react";
import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";
import Introduction from "./introduction";
import SubHero from "./sub-hero";

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <SubHero />
      <Introduction />
    </MainLayout>
  );
};

export default App;
