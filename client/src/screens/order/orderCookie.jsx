import React from "react";

const OrderCookie = ({ cookies }) => {
  console.log(cookies);
  return (
    <div className="order__cookieContainer">
      {cookies.map((cookie, idx) => (
        <div className="order__cookie" key={idx}>
          <img src={cookie.img_url} alt={cookie.name} />
          <h3>{cookie.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default OrderCookie;
