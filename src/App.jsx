import { useState, useEffect } from "react";
import "./App.css";
import useContentful from "./hooks/useContentful";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, NavLink} from 'react-router-dom';
import Singlerecipe from "./hooks/Singlerecipe";

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
    {/*<Singlerecipe {Singlerecipe}/>*}
    <Routes>
    <Route path='Singlerecipe/:id' element={Singlerecipe}/>
    <Route />

    </Routes>
      <div className="container w-100 pt-3">
        <div className="row row-cols-3">
          {!recipes ? (
            <p>Loading...</p>
          ) : (
            recipes.map((recipe) => {
              return (
                <div
                  className="col storie-card d-flex gap-4  mb-3 rounded shadow p-3 px-4"
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
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;