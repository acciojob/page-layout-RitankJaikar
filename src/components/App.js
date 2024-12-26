// App.js
import React from "react";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>This is the content of my website.</p>}
      para={<p>This is content of website.</p>}
    />
  );
};

export default App;
