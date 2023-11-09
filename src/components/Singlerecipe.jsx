import { useParams } from "react-router-dom";
import useContentfulsingle from "../hooks/useContentfulsingle";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Singlerecipe = () => {
  const { id } = useParams();
  const { getRecipe } = useContentfulsingle();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipe(id)
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // create button which uses useNavigate from react router dom to go back to the grid page
    <div className="body ">
      <div className="container d-flex gap-5">
        <div className="ingredient-descrip-section p-5">
          <div className="about shadow rounded-2 p-5">
            <h2 className="text-success ">About</h2>
            <p className="p-1">{recipe?.description}</p>
          </div>
          <div className="ingredient shadow rounded-2 p-5">
            <h2 className="text-success "> Ingredients</h2>
            <ul className="d-flex flex-column gap-1 list-unstyled fst-italic">
              {recipe?.ingredient.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="title-img-section shadow rounded-2 p-5 text-center">
          <h1 className="mb-4 text-success fw-bold fst-italic">
            {recipe?.title}
          </h1>
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

export default Singlerecipe;
