import React from "react";
import "./home.css";
import cookie from "../../assets/images/500pxCOOOKIE.png";

const Home = () => {
  return (
    <div className="home">
      <div className="menu">
        <div className="menu__title">
          <h2>Cookie Menu</h2>
        </div>
        <ol>
          <li className="menu__li">
            <div className="menu__cookieDiv">
              <h3>Chocolate Chip</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <img className="menu__cookie" src={cookie} alt="" />
          </li>
          <li className="menu__li">
            <div className="menu__cookieDiv">
              <h3>Chocolate Chip</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <img className="menu__cookie" src={cookie} alt="" />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
