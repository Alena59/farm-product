import React from "react";
import Title from "../../../components/ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import { Features, Ul, Li, StyledButton } from "./styles";
import { AppRoute } from "../../../const";

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
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
