"use client";

import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
      <Toaster />
    </>
  );
};

export default ReduxProvider;
