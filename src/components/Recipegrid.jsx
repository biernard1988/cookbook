import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipecard from "./Recipecard";

// Recipegrid component
const Recipegrid = () => {
  // Custom hook for fetching recipes from Contentful
  const { getRecipes } = useContentful();

  // State to store the fetched recipes
  const [recipes, setRecipes] = useState([]);

  // useEffect hook to fetch recipes when the component mounts
  useEffect(() => {
    // Using the getRecipes function from the custom hook
    getRecipes()
      .then((data) => {
        // Setting the fetched recipes in the state
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during fetching
      });
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // JSX structure for rendering the Recipegrid
  return (
    <div className="container w-100 pt-3">
      <div className="row row-cols-3">
        {/* Conditional rendering based on whether recipes are available */}
        {!recipes ? (
          <p>Loading...</p>
        ) : (
          // Mapping through the recipes and rendering Recipecard component for each
          recipes.map((recipe) => {
            return <Recipecard key={recipe.id} recipe={recipe} />;
          })
        )}
      </div>
    </div>
  );
};

// Exporting the Recipegrid component as the default export of this module
export default Recipegrid;
