import React from "react";

const OrderMain = () => {
  const pricing = [
    {
      content: "Single",
      price: "$2.00",
    },
    {
      content: "Quadruple",
      price: "$7.50",
    },
    {
      content: "Half Dozen",
      price: "$11.00",
    },
    {
      content: "Dozen",
      price: "$21.00",
    },
  ];
  return (
    <div className="order__selectContainer">
      {pricing.map((price) => (
        <div className="order__select">
          <h2>{price.content}</h2>
          <h2>{price.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default OrderMain;
