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
  const [amount, setAmount] = useState(0);
  const [order, setOrder] = useState([]);
  return (
    <div>
      <Switch>
        <Route exact path="/order">
          <OrderMethod
            setAmount={setAmount}
            setOrder={setOrder}
            setDelivery={setDelivery}
          />
        </Route>
        {delivery ? (
          <Route path="/order/select">
            <OrderMain setAmount={setAmount} />
          </Route>
        ) : (
          <Redirect to="/order" />
        )}
        {delivery ? (
          <Route path="/order/cookie">
            <OrderCookie
              amount={amount}
              setAmount={setAmount}
              cookies={cookies}
              order={order}
              setOrder={setOrder}
            />
          </Route>
        ) : (
          <Redirect to="/order" />
        )}
      </Switch>
    </div>
  );
};

export default Order;
