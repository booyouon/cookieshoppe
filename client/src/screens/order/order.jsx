import React from "react";
import "./order.css";
import OrderMethod from "./orderInitial";
import OrderMain from "./orderMain";
import OrderCookie from "./orderCookie";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Order = ({ cookies }) => {
  const [delivery, setDelivery] = useState("");
  return (
    <div>
      <Switch>
        <Route exact path="/order">
          <OrderMethod setDelivery={setDelivery} />
        </Route>
        {delivery ? (
          <Route path="/order/select">
            <OrderMain />
          </Route>
        ) : (
          <Redirect to="/order" />
        )}
        {delivery ? (
          <Route path="/order/cookie">
            <OrderCookie cookies={cookies} />
          </Route>
        ) : (
          <Redirect to="/order" />
        )}
      </Switch>
    </div>
  );
};

export default Order;
