import React from "react";
import "./order.css";
import OrderMethod from "./orderInitial";
import OrderMain from "./orderMain";
import OrderCookie from "./orderCookie";
import { useState } from "react";

const Order = ({ cookies }) => {
  const [delivery, setDelivery] = useState("");
  return (
    <div>
      <OrderMethod setDelivery={setDelivery} />
      <OrderMain />
      <OrderCookie cookies={cookies} />
    </div>
  );
};

export default Order;
