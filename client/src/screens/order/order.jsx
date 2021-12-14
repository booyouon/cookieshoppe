import React from "react";
import "./order.css";
import OrderMethod from "./orderInitial";
import OrderMain from "./orderMain";
import OrderCookie from "./orderCookie";

const Order = ({ cookies }) => {
  return (
    <div>
      {/* <OrderMethod /> */}
      {/* <OrderMain /> */}
      <OrderCookie cookies={cookies} />
    </div>
  );
};

export default Order;
