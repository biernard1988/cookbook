import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Recipecard = ({ recipe }) => {
  return (
    <Link className="text-decoration-none" to={`/${recipe.id}`}>
      <div
        className="col storie-card d-flex gap-4 mb-3 rounded shadow p-3 px-4"
        key={recipe.title}
      >
        <img
          className="w-25 object-fit-cover rounded"
          src={recipe.img}
          alt={recipe.title}
        />
        <div className="section-text d-flex align-items-center">
          <h4 className="text-success fw-bold mb-2">{recipe.title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Recipecard;
