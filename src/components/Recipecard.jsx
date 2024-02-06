import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Recipecard component
const Recipecard = ({ recipe }) => {
  // JSX structure for rendering each recipe card
  return (
    // Using React Router's Link component to create a link to the detailed recipe page
    <Link className="text-decoration-none" to={`/${recipe.id}`}>
      {/* Recipe card container with Bootstrap classes */}
      <div
        className="col storie-card d-flex gap-4 mb-3 rounded shadow p-3 px-4"
        key={recipe.title}
      >
        {/* Recipe image */}
        <img
          className="w-25 object-fit-cover rounded"
          src={recipe.img}
          alt={recipe.title}
        />

        {/* Section for recipe title */}
        <div className="section-text d-flex align-items-center">
          <h4 className="text-success fw-bold mb-2">{recipe.title}</h4>
        </div>
      </div>
    </Link>
  );
};

// Exporting the Recipecard component as the default export of this module
export default Recipecard;
