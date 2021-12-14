import React from "react";
import Layout from "../layout/layout";
import Home from "../../screens/home/home";
import Order from "../../screens/order/order";
import cookie from "../../assets/images/500pxCOOOKIE.png";
import Reviews from "../../screens/reviews/reviews";
import { getAllCookies } from "../../services/cookie";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  const [cookies, setCookies] = useState([]);
  useEffect(() => {
    const fetchCookies = async () => {
      const cookieList = await getAllCookies();
      setCookies(cookieList);
      console.log(cookieList);
    };
    fetchCookies();
  }, []);
  return (
    <Layout>
      <Route exact path="/Order">
        <Order cookies={cookies} />
      </Route>
      <Route exact path={["/", "/Menu"]}>
        <Home cookies={cookies} />
      </Route>
      {cookies.map((cookie) => (
        <Route exact path={`/cookies/${cookie.id}`}>
          <Reviews cookie={cookie} />
        </Route>
      ))}
    </Layout>
  );
};

export default Main;
