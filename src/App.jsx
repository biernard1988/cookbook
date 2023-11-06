import { useState, useEffect } from "react";
import "./App.css";
import useContentful from "./hooks/useContentful";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
    <>
      {!recipes ? (
        <p>Loading...</p>
      ) : (
        recipes.map((recipe) => {
          return (
            <div className="container w-50 pt-3">
              <div
                className="storie-card d-flex gap-5  mb-3 rounded shadow p-3 px-4"
                key={recipe.title}
              >
                <img className="w-25" src={recipe.img} alt={recipe.title} />
                <div className="section-text">
                  <h4 className="text-primary mb-5">{recipe.title}</h4>{" "}
                  {/* Display the story title */}
                  <ul className="d-flex flex-column gap-1 list-unstyled fst-italic">
                    {recipe.ingredients?.map((ingredient) => {
                      return <li>{ingredient}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
