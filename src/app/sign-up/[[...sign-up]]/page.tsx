import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center mt-40">
      <SignUp />
    </div>
  );
};

export default page;
