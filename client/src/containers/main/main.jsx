import React from "react";
import Layout from "../layout/layout";
import Home from "../../screens/home/home";
import Order from "../../screens/order/order";
import Reviews from "../../screens/reviews/reviews";
import { getAllCookies } from "../../services/cookie";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const Main = () => {
  const [cookies, setCookies] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const fetchCookies = async () => {
      const cookieList = await getAllCookies();
      setCookies(cookieList);
    };
    fetchCookies();
  }, [toggleFetch]);

  return (
    <Layout>
      <Order cookies={cookies} />
      <Route exact path={["/", "/Menu"]}>
        <Home cookies={cookies} />
      </Route>
      <Route exact path="/more">
        <div>under construction</div>
      </Route>

      {cookies.map((cookie, idx) => (
        <Route exact path={`/cookies/${cookie.id}`} key={idx}>
          <Reviews cookie={cookie} setToggleFetch={setToggleFetch} />
        </Route>
      ))}
    </Layout>
  );
};

export default Main;
