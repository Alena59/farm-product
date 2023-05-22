import React from "react";
import Title from "../../../components/ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import { Features, Ul, Li, StyledButton } from "./styles";

// import "styles.js";

// список преимуществ
function FeaturesList({ features }) {
  return features && features.length ? (
    <Features>
      <Title>Почему фермерские продукты лучше?</Title>
      <Ul>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link="/buy">Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
