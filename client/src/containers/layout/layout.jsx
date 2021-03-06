import React from "react";
import bwHeart from "../../assets/images/500pxbwheart.png";
import heartImage from "../../assets/images/500pxredheart.png";
import "./layout.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const footerLinks = ["Menu", "Order", "More"];
  const [heartSrc, setHeartSrc] = useState(location.pathname);
  return (
    <div>
      <nav className="layout__nav">
        <Link to="/">
          <img className="layout__logo" src={heartImage} alt="" />
        </Link>
      </nav>
      <div className="layout__children">{children}</div>
      <footer className="layout__footer ">
        {footerLinks.map((link, idx) => (
          <Link key={idx} to={`/${link}`}>
            <div
              onClick={() => setHeartSrc(link)}
              className="layout__link"
              key={idx}
            >
              <img
                className="layout__logo"
                src={heartSrc.includes(link) ? heartImage : bwHeart}
                alt={link}
              />
              <p>{link}</p>
            </div>
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default Layout;
