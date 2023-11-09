import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Navbar from "./components/Navbar";
import Recipegrid from "./components/Recipegrid";
import Singlerecipe from "./components/Singlerecipe";

function App() {
  return (
    <>
      <Navbar path="/" element={<Recipegrid />} />
      <Routes>
        <Route path="/" element={<Recipegrid />} />
        <Route path="/:id" element={<Singlerecipe />} />
      </Routes>
    </>
  );
}

export default App;
