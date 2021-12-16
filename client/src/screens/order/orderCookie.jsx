import React from "react";

const OrderCookie = ({ cookies, setAmount, amount, order, setOrder }) => {
  const handleClick = (url) => {
    if (amount > 0) {
      setAmount((prevState) => prevState - 1);
      setOrder((prevState) => [...prevState, url]);
    } else {
      console.log("poop");
    }
  };

  const handleRemove = (el) => {
    const index = order.indexOf(el);
    const oldOrder = order;
    oldOrder.splice(index, 1);
    setOrder(oldOrder);
    setAmount((prevState) => prevState + 1);
  };
  const orderDiv = order?.map((el, idx) => (
    <img
      key={idx}
      onClick={() => handleRemove(el)}
      className="order__miniCookie"
      src={el}
      alt={el}
    />
  ));
  return (
    <>
      <h1>
        {amount} more cookie{amount > 1 && "s"}
      </h1>
      {orderDiv}
      <p className="order__button">Continue</p>
      <div className="order__cookieContainer">
        {cookies.map((cookie, idx) => (
          <div
            className="order__cookie"
            key={idx}
            onClick={() => handleClick(cookie.img_url)}
          >
            <img src={cookie.img_url} alt={cookie.name} />
            <h3>{cookie.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderCookie;
