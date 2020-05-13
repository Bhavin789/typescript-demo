import React from "react";

const Feed = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.comment}</h3>
    </>
  );
};

export default Feed;
