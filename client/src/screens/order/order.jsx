import React from "react";
import "./order.css";
import OrderMethod from "./orderInitial";
import OrderMain from "./orderMain";
import OrderCookie from "./orderCookie";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

const Order = ({ cookies }) => {
  const [delivery, setDelivery] = useState("");
  return (
    <div>
      <Switch>
        <Route path="/Order">
          <OrderMethod setDelivery={setDelivery} />
        </Route>
        <Route>
          <OrderMain path="/Order/Main" />
        </Route>
        <Route path="/Order/Cookie">
          <OrderCookie cookies={cookies} />
        </Route>
      </Switch>
    </div>
  );
};

export default Order;
