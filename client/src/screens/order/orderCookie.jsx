import React from "react";

const OrderCookie = ({ cookies, amount, order, setOrder }) => {
  return (
    <>
      <h1>
        {amount} more cookie{amount > 1 && "s"}
      </h1>
      <div className="order__cookieContainer">
        {cookies.map((cookie, idx) => (
          <div className="order__cookie" key={idx}>
            <img src={cookie.img_url} alt={cookie.name} />
            <h3>{cookie.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderCookie;
