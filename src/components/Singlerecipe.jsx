import { useParams } from "react-router-dom";
import useContentfulsingle from "../hooks/useContentfulsingle";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Singlerecipe component
const Singlerecipe = () => {
  // Extracting the 'id' parameter from the URL using useParams
  const { id } = useParams();

  // Custom hook for fetching a single recipe from Contentful
  const { getRecipe } = useContentfulsingle();

  // State to store the fetched recipe
  const [recipe, setRecipe] = useState();

  // useEffect hook to fetch the recipe when the component mounts
  useEffect(() => {
    // Using the getRecipe function from the custom hook
    getRecipe(id)
      .then((data) => {
        // Setting the fetched recipe in the state
        setRecipe(data);
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during fetching
      });
  }, [id]); // The 'id' dependency ensures this effect runs whenever the 'id' parameter changes

  // JSX structure for rendering the detailed recipe
  return (
    <div className="body ">
      <div className="container d-flex gap-5">
        {/* Section for recipe description and ingredients */}
        <div className="ingredient-descrip-section p-5">
          {/* About section */}
          <div className="about shadow rounded-2 p-5">
            <h2 className="text-success ">About</h2>
            <p className="p-1">{recipe?.description}</p>
          </div>

          {/* Ingredients section */}
          <div className="ingredient shadow rounded-2 p-5">
            <h2 className="text-success "> Ingredients</h2>
            <ul className="d-flex flex-column gap-1 list-unstyled fst-italic">
              {/* Mapping through ingredients and rendering each as a list item */}
              {recipe?.ingredient.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        </div>

        {/* Section for recipe title and image */}
        <div className="title-img-section shadow rounded-2 p-5 text-center">
          {/* Recipe title */}
          <h1 className="mb-4 text-success fw-bold fst-italic">
            {recipe?.title}
          </h1>

          {/* Recipe image */}
          <img
            className="img-fluid rounded"
            src={recipe?.img}
            alt={recipe?.title}
          />
        </div>
      </div>
    </div>
  );
};

// Exporting the Singlerecipe component as the default export of this module
export default Singlerecipe;
