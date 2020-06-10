import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LinkList from "./components/LinkList";
import UserContext from "./UserContext";
import AddLinkForm from "./components/AddLinkForm";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      {user && <AddLinkForm />}
      <LinkList />
    </UserContext.Provider>
  );
}

export default App;
