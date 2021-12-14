import React from "react";

const ReviewForm = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input type="text" />
      <input type="text" />
      <input type="hidden" value="" />
    </form>
  );
};

export default ReviewForm;
