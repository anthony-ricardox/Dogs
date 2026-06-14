import React from "react";

const Error = ({error}) => {
  if (!error) return null;

  return <p style={{ color: "#f31", marginTop: "0.5rem" }}>{error}</p>;
};

export default Error;
