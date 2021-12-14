import React from "react";

const OrderCookie = ({ cookies }) => {
  console.log(cookies);
  return (
    <div>
      {cookies.map((cookie) => (
        <div>
          <img src={cookie.img_url} alt="" />
          <h3>{cookie.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default OrderCookie;
