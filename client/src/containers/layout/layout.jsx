import React from "react";
import heartImage from "../../assets/images/500pxbwheart.png";
import "./layout.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const footerLinks = ["Menu", "Order", "More"];
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
            <div className="layout__link" key={idx}>
              <img className="layout__logo" src={heartImage} alt={link} />
              <p>{link}</p>
            </div>
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default Layout;
