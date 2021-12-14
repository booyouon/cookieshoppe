import React from "react";
import { getAllReviews } from "../../services/review";
import { useState, useEffect } from "react";
import "./reviews.css";
import ReviewForm from "./reviewForm";

const Reviews = ({ cookie }) => {
  console.log(cookie);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getAllReviews();
      setReviews(reviewList.filter((rev) => rev.cookie_id == cookie.id));
      console.log(reviews);
    };
    fetchReviews();
  }, [cookie]);
  return (
    <div className="review">
      <ReviewForm />
      <div className="menu__cookieDiv">
        <h3>{cookie.name}</h3>
        <p>{cookie.description}</p>
        <img className="menu__cookie" src={cookie.img_url} alt={cookie.name} />
      </div>
      {reviews.map((review) => (
        <div className="review__individual">
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
