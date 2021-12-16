import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OrderMain = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
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
  const handleClick = () => {
    history.push("/order/cookie");
  };
  return (
    <div className="order__selectContainer">
      {pricing.map((price, idx) => (
        <div onClick={() => handleClick()} key={idx} className="order__select">
          <h2>{price.content}</h2>
          <h2>{price.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default OrderMain;
