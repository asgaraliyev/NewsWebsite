import "../style/style.css";
import "../style/antd.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import firebase from "../Config/Firebase";
import TheDrawer from "../Components/Drawer";
import Store from "../Redux/";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Router from "next/router";
import { useDispatch } from "react-redux";
import Loader from "../Components/Loader";

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, []);
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
      <TheDrawer></TheDrawer>
      {/* <Loader></Loader> */}
      {isLoading ? <Loader></Loader> : null}
    </Provider>
  );
}
