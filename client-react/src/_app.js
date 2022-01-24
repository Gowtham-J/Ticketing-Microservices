// routes
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
import BuildClient from "./api/build-client";
// ----------------------------------------------------------------------

const App = () => {
  return (
    <>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Router />
      </ThemeConfig>
    </>
  );
};

export default App;
