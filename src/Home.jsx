import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background"; // Added missing import

export default function Home() {
  const [mood, setMood] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const moods = [
    {
      name: "Happy",
      emoji: "😀",
      src: "https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_1280.png",
    },
    {
      name: "Sad",
      emoji: "😔",
      src: "https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037",
    },
    {
      name: "Irritated",
      emoji: "😒",
      src: "https://i.pinimg.com/736x/a4/07/e1/a407e18dcdee2d1ab637acd48c91ae91.jpg",
    },
    {
      name: "Angry",
      emoji: "😠",
      src: "https://static-00.iconduck.com/assets.00/angry-face-emoji-512x512-f1x3kesl.png",
    },
  ];

  // Update input field when mood is clicked
  const handleMoodClick = (emoji) => {
    setMood(emoji);
    setError(null);
  };

  // Handle submit button
  const handleSubmit = async () => {
    if (mood.trim() !== "") {
        try {
            const response = await fetch("http://localhost:5000/get-recipe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ mood }),
            });

            const data = await response.json();
            console.log(data);
            if (data.error) {
                alert("Error fetching recipe");
            } else {
                navigate("/recipes", { state: { recipe: data } });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
};


  return (
    <Background backgroundImage="https://www.shutterstock.com/shutterstock/photos/458828419/display_1500/stock-vector-seamless-food-pattern-can-be-used-for-wallpaper-website-background-wrapping-paper-458828419.jpg">
      <Header />
      <main className="main-content">
        <div className="text-container">
          <h3>Start cooking for your happiness with MoodChef today!</h3>
          <h2>What's your current mood?</h2>
        </div>

        {/* Mood Options */}
        <div className="mood-options">
          {moods.map((item, index) => (
            <div key={index} className="mood" onClick={() => handleMoodClick(item.emoji)}>
              <img src={item.src} alt={item.name} className="img" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {/* Mood Input */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Type your mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
          <button type="button" className="submit-btn" onClick={handleSubmit}>
            ➔
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}
      </main>
      <Footer />
    </Background>
  );
}
