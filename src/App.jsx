import { useState, useEffect } from "react";
import "./App.css";
import useContentful from "./hooks/useContentful";

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
            <div className="card" key={recipe.title}>
              <h1>{recipe.title}</h1>
              <img src={recipe.img} alt={recipe.title} />
              <p>{recipe.description}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
