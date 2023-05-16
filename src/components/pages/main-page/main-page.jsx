import React from "react";
import About from "../../../components/blocks/about/about";
import FeaturesList from "../../../components/blocks/features-list/features-list";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;