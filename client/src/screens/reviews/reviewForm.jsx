import React from "react";
import { useState } from "react";
import { postReview } from "../../services/review";

const ReviewForm = ({ cookie, setToggleFetch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleReviewCreate = async (formData) => {
    const newReview = await postReview(formData);
    setToggleFetch((prevState) => !prevState);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleReviewCreate({
      title: title,
      description: description,
      cookie_id: cookie.id,
    });
  };
  return (
    <form
      
      className="review__create"
      onSubmit={(ev) => handleSubmit(ev)}
    >
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        name="description"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="hidden" name="cookie_id" value={cookie.id} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default ReviewForm;
