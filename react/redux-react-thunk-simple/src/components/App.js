import React from "react";
import List from "./List";
import Form from "./Form";
import Posts from "./Posts";

const App = () => (
  <div>
      <h1>Articles</h1>
      <List/>
      <h1>Add a new article</h1>
      <Form/>
      <h1>Posts</h1> 
      <Posts/>
  </div>
);

export default App;