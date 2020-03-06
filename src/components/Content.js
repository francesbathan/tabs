import React from "react";

const Content = props => {
  return (
    <div>
      <h1>{props.label}</h1>
      <p>{props.content}</p>
    </div>
  );
};
export default Content;
