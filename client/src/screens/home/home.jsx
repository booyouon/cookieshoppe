import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = ({ cookies }) => {
  return (
    <div className="home">
      <div className="menu">
        <div className="menu__title">
          <h2>Cookie Menu</h2>
        </div>
        <ol>
          {cookies.map((cookie, idx) => (
            <li key={idx} className="menu__li">
              <div className="menu__cookieDiv">
                <h3>{cookie.name}</h3>
                <p>{cookie.description}</p>
              </div>
              <Link to={`/cookies/${cookie.id}`}>
                <img
                  className="menu__cookie"
                  src={cookie.img_url}
                  alt={cookie.name}
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Home;
