import React from "react";
import "./reviews.css";
import ReviewUpdate from "./reviewUpdate";
import { deleteReview } from "../../services/review";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Reviews = ({ cookie, setToggleFetch }) => {
  const [editDisplay, setEditDisplay] = useState(false);

  const history = useHistory();
  const reviewDelete = async (id) => {
    await deleteReview(id);
  };

  const handleDelete = (review) => {
    reviewDelete(review.id);
    setToggleFetch((prevState) => !prevState);
    history.push(`/cookies/${cookie.id}`);
  };
  return (
    <div className="review">
      <div className="menu__cookieDiv">
        <h3>{cookie.name}</h3>
        <p>{cookie.description}</p>
        <img className="menu__cookie" src={cookie.img_url} alt={cookie.name} />
      </div>
      {cookie.reviews.map((review, idx) => (
        <div className="review__individual" key={idx}>
          <div style={{ display: editDisplay ? "none" : "block" }}>
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            <div className="review__buttons">
              <p onClick={() => setEditDisplay((prevState) => !prevState)}>
                Edit
              </p>
              <p onClick={() => handleDelete(review)}>Delete</p>
            </div>
          </div>
          <ReviewUpdate
            cookie={cookie}
            review={review}
            setToggleFetch={setToggleFetch}
            editDisplay={editDisplay}
            setEditDisplay={setEditDisplay}
          />
        </div>
      ))}
      <div className="review__button">
        <h3>Write A Review</h3>
      </div>
    </div>
  );
};

export default Reviews;
