// Importing necessary modules and styles
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing custom components
import Navbar from "./components/Navbar";
import Recipegrid from "./components/Recipegrid";
import Singlerecipe from "./components/Singlerecipe";

// The main App component
function App() {
  // The return statement contains the structure of the application
  return (
    <>
      {/* Rendering the Navbar component with a path prop and an element prop */}
      {/* The path prop specifies the URL path for which this Navbar should be active */}
      {/* The element prop is JSX that will be rendered when the path matches */}
      <Navbar path="/" element={<Recipegrid />} />

      {/* Using the React Router "Routes" component to define the routes */}
      <Routes>
        {/* The first Route component for the path "/" */}
        {/* It renders the Recipegrid component when the path matches */}
        <Route path="/" element={<Recipegrid />} />

        {/* The second Route component for dynamic paths like "/:id" */}
        {/* It renders the Singlerecipe component when the path matches */}
        {/* ":id" is a route parameter that can be accessed in the Singlerecipe component */}
        <Route path="/:id" element={<Singlerecipe />} />
      </Routes>
    </>
  );
}

// Exporting the App component as the default export of this module
export default App;
