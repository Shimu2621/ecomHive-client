import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="text-center mx-auto">
      <SignIn />
    </div>
  );
};

export default page;
