import React from "react";
import { putReview } from "../../services/review";
import { useState } from "react";

const ReviewUpdate = ({ review, cookie, setToggleFetch }) => {
  const [title, setTitle] = useState(review.title);
  const [description, setDescription] = useState(review.description);
  const handleReviewEdit = async (id, formData) => {
    await putReview(id, formData);
    setToggleFetch((prevState) => !prevState);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleReviewEdit(review.id, {
      title: title,
      description: description,
      cookie_id: cookie.id,
    });
  };
  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
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

export default ReviewUpdate;
