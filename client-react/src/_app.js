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

App.getInitialProps = async (appContext) => {
  const client = BuildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  console.log("this is data", data);
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }
  return {
    pageProps,
    ...data,
  };
};

export default App;
