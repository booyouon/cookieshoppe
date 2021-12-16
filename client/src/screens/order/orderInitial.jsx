import React from "react";
import { useHistory } from "react-router-dom";

const OrderMethod = ({ setDelivery, setAmount, setOrder }) => {
  const history = useHistory();
  const handleDelivery = () => {
    setDelivery("delivery");
    setAmount(0);
    setOrder([]);
    history.push("/order/select");
  };
  const handleShip = () => {
    setDelivery("ship");
    setAmount(0);
    setOrder([]);
    history.push("/order/select");
  };
  return (
    <div className="order__initial">
      <div onClick={() => handleDelivery()} className="order__buttonMethod">
        <h2>Delivery</h2>
      </div>
      <div onClick={() => handleShip()} className="order__buttonMethod">
        <h2>Pickup</h2>
      </div>
    </div>
  );
};

export default OrderMethod;
