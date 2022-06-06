import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <Outlet context={[search, setSearch]}/>
  );
}

export default App;
