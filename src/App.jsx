import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Navbar from "./components/Navbar";
import Recipecard from "./components/Recipecard";
import Recipegrid from "./components/Recipegrid";
import Singlerecipe from "./components/Singlerecipe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Recipegrid />} />
        <Route path="/:id" element={<Singlerecipe />} />
      </Routes>
    </>
  );
}

export default App;
