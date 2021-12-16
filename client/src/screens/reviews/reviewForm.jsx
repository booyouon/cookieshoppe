import React from "react";
import { useState } from "react";
import { postReview } from "../../services/review";

const ReviewForm = ({
  cookie,
  setToggleFetch,
  createDisplay,
  setCreateDisplay,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleReviewCreate = async (formData) => {
    await postReview(formData);
    setToggleFetch((prevState) => !prevState);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleReviewCreate({
      title: title,
      description: description,
      cookie_id: cookie.id,
    });
    setDescription("");
    setTitle("");
    setCreateDisplay((prevState) => !prevState);
  };

  return (
    <form
      style={{ display: createDisplay || "none" }}
      className="review__post"
      onSubmit={(ev) => handleSubmit(ev)}
    >
      <input
        type="text"
        className="review__post__title"
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
      <div className="review__buttons">
        <input type="submit" value="Submit" />
        <p onClick={() => setCreateDisplay((prevState) => !prevState)}>
          Cancel
        </p>
      </div>
    </form>
  );
};

export default ReviewForm;
