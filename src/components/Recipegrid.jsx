import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipecard from "./Recipecard";

const Recipegrid = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container w-100 pt-3">
      <div className="row row-cols-3">
        {!recipes ? (
          <p>Loading...</p>
        ) : (
          recipes.map((recipe) => {
            return <Recipecard key={recipe.id} recipe={recipe} />;
          })
        )}
      </div>
    </div>
  );
};

export default Recipegrid;
