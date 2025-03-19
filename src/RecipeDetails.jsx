import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./RecipeDetails.css";
import Header from "./Header";
import Footer from "./Footer";

export default function RecipeDetails() {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <>
      <Header />
      <div className="recipe-details">
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <h4>Ingredients:</h4>
        <ul>{recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}</ul>
        <h4>Steps:</h4>
        <ol>{recipe.steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
        <Link to="/recipes">Back to Recipes</Link>
      </div>
      <Footer />
    </>
  );
}
