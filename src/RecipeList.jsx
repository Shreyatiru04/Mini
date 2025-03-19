import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./RecipeList.css";
import Header from "./Header";
import Footer from "./Footer";



export default function RecipeList() {
  const location = useLocation();
  const recipes = location.state?.recipes || [];

  return (
    <div>
      <h2>Recipe Suggestions</h2>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <h4>Ingredients:</h4>
              <ul>{recipe.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
              <h4>Steps:</h4>
              <ol>{recipe.steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
