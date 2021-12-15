import React from "react";
import { putReview } from "../../services/review";
import { useState } from "react";

const ReviewUpdate = ({
  review,
  cookie,
  setToggleFetch,
  editDisplay,
  setEditDisplay,
}) => {
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
    setEditDisplay((prevState) => !prevState);
  };
  return (
    <form
      style={{ display: editDisplay ? "block" : "none" }}
      className="review__create"
      onSubmit={(ev) => handleSubmit(ev)}
    >
      <input
        type="text"
        className="review__create__title"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="textarea"
        name="description"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="review__buttons">
        <input type="submit" value="Submit" />
        <p onClick={() => setEditDisplay((prevState) => !prevState)}>Cancel</p>
      </div>
      <input type="hidden" name="cookie_id" value={cookie.id} />
    </form>
  );
};

export default ReviewUpdate;
