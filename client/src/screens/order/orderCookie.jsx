import React from "react";

const OrderCookie = ({ cookies, setAmount, amount, order, setOrder }) => {
  const orderDiv = order?.map((el, idx) => (
    <img key={idx} className="order__miniCookie" src={el} alt={el} />
  ));
  const handleClick = (url) => {
    setAmount((prevState) => prevState - 1);
    console.log(amount);
    setOrder((prevState) => [...prevState, url]);
  };
  return (
    <>
      <h1>
        {amount} more cookie{amount > 1 && "s"}
      </h1>
      {orderDiv}
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
