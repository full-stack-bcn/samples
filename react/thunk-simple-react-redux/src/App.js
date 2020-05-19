import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import Posts from "./components/Posts";

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