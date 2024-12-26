// PageLayout.js
import React from "react";

const PageLayout = ({ header, footer, para }) => {
  return (
    <div>
      <header>{header}</header>
      <main>{para}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;
