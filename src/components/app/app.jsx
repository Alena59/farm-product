import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import products from "../../mocks/products";
import { GlobalStyle } from "./styles";
import ScrollTop from "../../components/ui/scroll-top/scroll-top";
import Order from "../../components/pages/order/order";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../../components/pages/main-page/main-page";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route path={AppRoute.ORDER} element={<Order products={products} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
