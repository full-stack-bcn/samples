import "./App.css";
import SearchScreen from "./screens/SearchScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/movie/:movieId" element={<MovieDetailsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
