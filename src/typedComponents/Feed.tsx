import React from "react";

import FeedProps from "../types/FeedType";

const Feed = (props: FeedProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h3>{props.likes}</h3>
      <h3>{props.author}</h3>
      <h3>{props.ageGroup}</h3>
      <h3>{props.comment}</h3>
    </>
  );
};

export default Feed;
