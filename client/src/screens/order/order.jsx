import React from "react";
import "./order.css";
import OrderMethod from "./orderInitial";
import OrderMain from "./orderMain";
import OrderCookie from "./orderCookie";
import { useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Order = ({ cookies }) => {
  const [delivery, setDelivery] = useState("");
  const [amount, setAmount] = useState(0);
  const [order, setOrder] = useState([]);
  return (
    <div>
      <Route exact path="/order">
        <OrderMethod
          setAmount={setAmount}
          setOrder={setOrder}
          setDelivery={setDelivery}
        />
      </Route>
      <Route exact path="/order/select">
        {delivery ? (
          <OrderMain setAmount={setAmount} />
        ) : (
          <Redirect to="/order" />
        )}
      </Route>

      <Route exact path="/order/cookie">
        {delivery ? (
          <OrderCookie
            amount={amount}
            setAmount={setAmount}
            cookies={cookies}
            order={order}
            setOrder={setOrder}
          />
        ) : (
          <Redirect to="/order" />
        )}
      </Route>
    </div>
  );
};

export default Order;
