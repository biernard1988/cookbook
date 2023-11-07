import React from "react";
import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
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
            return (
              <a href="#" className="text-decoration-none">
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
                    <h4 className="text-success fw-bold mb-2">
                      {recipe.title}
                    </h4>
                    {/* <ul className="d-flex flex-column gap-1 list-unstyled fst-italic">
                          {recipe.ingredients?.map((ingredient) => {
                            return <li>{ingredient}</li>;
                          })}
                        </ul> */}
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cards;
