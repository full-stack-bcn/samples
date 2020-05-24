import React from "react";
import List from "./components/List.js";
import Form from "./components/Form.js";

const App = () => (
  <div>
      <h1>Articles</h1>
      <List/>
      <h1>Add a new article</h1>
      <Form/>
  </div>
);

export default App;