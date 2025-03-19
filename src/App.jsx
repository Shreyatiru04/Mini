import {  Routes, Route } from "react-router-dom";
import "./App.css";

import Question from "./Question";
import Logins from "./Logins"; 
import Register from "./Register";
import Home from "./Home";
import FrontPage from "./FrontPage";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Explore from "./Explore";

function App() {
  const sample = ["Hot", "Cold"];
  const sample2=["Yes","No"];
const optionsList = [
    ["Soups and Stews", "Pizzas and Flatbreads", "Grains and Rice Dishes","Curries and Spicy Dishes","Pastas and Casseroles","Snacks"]

];
const optionsList2=[
  ["Salads","Cold Appetizers ","Cold Soups","Desserts","Cold sea food dishes","Cold Beverages","Starters","Smoothies"]
]
const optionsList3=[
  ["Gluten-Free","Sugar-Free","Fat-free","Dairy-free","Vegan","Vegetarian"]
];

  
  return (
    
      <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/recipe/:index" element={<RecipeDetails />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/question1"  element={
                        <Question
                            question="What is your favorite food?"
                            optionsList={[
                                ["Pizza", "Burger", "Pasta"],
                                ["Sushi", "Salad", "Tacos"]
                            ]}
                            nextPath="/explore"
                        />
                    }/>
                    <Route path="/question2"  element={
                      <Question
                          question="What is your favorite food?"
                          optionsList={[[
                              "Yes","No"]
                          ]}
                          nextPath="/explore"
                      />
                  }

                />

      </Routes>
  
  );
}

export default App;
