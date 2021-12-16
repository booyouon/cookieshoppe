import React from "react";

const OrderMethod = ({ setDelivery }) => {
  const handleDelivery = () => {
    console.log("delivery");
    setDelivery("delivery");
  };
  const handleShip = () => {
    console.log("ship");
    setDelivery("ship");
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
