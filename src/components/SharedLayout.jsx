import React from "react";
import SharedHeader from "./SharedHeader";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <SharedHeader />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

export default SharedLayout;
