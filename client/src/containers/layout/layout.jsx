import React from "react";
import heartImage from "../../assets/images/500pxbwheart.png";
import "./layout.css";

const Layout = ({ children }) => {
  const footerLinks = ["Menu", "Order", "More"];
  return (
    <div>
      <nav className="layout__nav">
        <img className="layout__logo" src={heartImage} alt="" />
      </nav>
      <div className="layout__children">{children}</div>
      <footer className="layout__footer ">
        {footerLinks.map((link, idx) => (
          <div className="layout__link" key={idx}>
            <img className="layout__logo" src={heartImage} alt={link} />
            <p>{link}</p>
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Layout;
