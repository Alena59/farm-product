import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import products from "../../mocks/products";
import { GlobalStyle } from "./styles";
import Order from "../../components/pages/order/order";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../../components/pages/main-page/main-page";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper features={features} />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/order.html" element={<Order products={products} />} />
        </Routes>
      </Router>
    </>
  );
}
