import React from "react";
import SharedHeader from "./SharedHeader";
import NavigationToggle from "./NavigateToggle";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <NavigationToggle />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

export default SharedLayout;
