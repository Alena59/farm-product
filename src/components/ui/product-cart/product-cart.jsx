import React from "react";
import Panel from "../../../components/ui/panel/panel";
import { TitleSize } from "../../../components/ui/title/title";
import OptionsList from "../../../components/ui/options-list/options-list";
import Tabs from "../../../components/ui/tabs/tabs";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";

function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <Panel displayFlex="flex">
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCart;