import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="text-center mx-auto">
      <SignUp />
    </div>
  );
};

export default page;
