import React from "react";

const SingleProductPage = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <h1>This is single product: {id}</h1>
    </div>
  );
};

export default SingleProductPage;
