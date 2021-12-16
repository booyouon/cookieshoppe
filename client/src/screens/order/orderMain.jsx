import React from "react";
import { useHistory } from "react-router-dom";

const OrderMain = ({ setAmount, delivery }) => {
  const history = useHistory();
  const pricing = [
    {
      content: "Single",
      price: "$2.00",
      length: 1,
    },
    {
      content: "Quadruple",
      price: "$7.50",
      length: 4,
    },
    {
      content: "Half Dozen",
      price: "$11.00",
      length: 6,
    },
    {
      content: "Dozen",
      price: "$21.00",
      length: 12,
    },
  ];
  const handleClick = (amount) => {
    setAmount(amount);
    history.push("/order/cookie");
  };
  return (
    <>
      <h3>Order method: {delivery}</h3>
      <div className="order__selectContainer">
        {pricing.map((price, idx) => (
          <div
            onClick={() => handleClick(price.length)}
            key={idx}
            className="order__select"
          >
            <h2>{price.content}</h2>
            <h2>{price.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderMain;
