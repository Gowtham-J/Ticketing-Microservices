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
  const [cookies, setCookie] = useCookies(["1P_JAR"]);
  // var session = '<%= Session["VALUE"] %>';
  const value = document.cookie;
  console.log("cookie", value);

  // const [user, setUser] = useState();
  // async function fetchData() {
  //   const response = await axios.get("/api/users/currentuser");
  //   setUser(response.data.currentUser);
  //   console.log("gelleo", response.data.currentUser);
  // }

  // useEffect(() => {
  //   fetchData();
  //   console.log("ghjsakas", user);
  // }, []);

  return (
    <>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        {/* <Component {...pageProps} currentUser={currentUser} /> */}
        {/* <Router user={user} /> */}
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
