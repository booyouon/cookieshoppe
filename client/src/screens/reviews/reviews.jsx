import React from "react";
import "./reviews.css";
import ReviewForm from "./reviewForm";

const Reviews = ({ cookie }) => {
  return (
    <div className="review">
      <ReviewForm />
      <div className="menu__cookieDiv">
        <h3>{cookie.name}</h3>
        <p>{cookie.description}</p>
        <img className="menu__cookie" src={cookie.img_url} alt={cookie.name} />
      </div>
      {cookie.reviews.map((review, idx) => (
        <div className="review__individual" key={idx}>
          <h3>{review.title}</h3>
          <p>{review.description}</p>
          <div className="review__buttons">
            <p>Edit</p>
            <p>Delete</p>
          </div>
        </div>
      ))}
      <div className="review__button">
        <h3>Write A Review</h3>
      </div>
    </div>
  );
};

export default Reviews;
