// PageLayout.js
import React from "react";

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      <header>{header}</header>
      <br />
      <main>{children}</main>
      <br />
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;
