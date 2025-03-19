import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
import "./Multiple.css";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

export default function Questions({ question, optionsList, nextPath }) {
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState(new Set());

    const toggleOption = (option) => {
        setSelectedOptions((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(option)) {
                newSet.delete(option);
            } else {
                newSet.add(option);
            }
            return newSet;
        });
    };

    return (
        <Background backgroundImage="https://img.freepik.com/premium-photo/seamless-pattern-with-various-food-items-picnic-lunch_14117-1090742.jpg">
            <Header />
            <main className="main-content">
                <section className="preference">
                    <h1 className="question-title">{question}</h1>
                    {optionsList.map((options, index) => (
                        <div key={index}>
                            <Multiple options={options} selectedOptions={selectedOptions} toggleOption={toggleOption} />
                        </div>
                    ))}
                    {nextPath && (
                        <button className="skip-button" onClick={() => navigate(nextPath)}>
                            Skip
                        </button>
                    )}
                </section>
            </main>
            <Footer />
        </Background>
    );
}

function Multiple({ options, selectedOptions, toggleOption }) {
    return (
        <form className="preferences-form">
            <div className="left-column">
                {options.slice(0, Math.ceil(options.length / 2)).map((option) => (
                    <label
                        key={option}
                        className={`checkbox-button ${selectedOptions.has(option) ? "selected" : ""}`}
                        onClick={() => toggleOption(option)}
                    >
                        {option}
                    </label>
                ))}
            </div>
            <div className="right-column">
                {options.slice(Math.ceil(options.length / 2)).map((option) => (
                    <label
                        key={option}
                        className={`checkbox-button ${selectedOptions.has(option) ? "selected" : ""}`}
                        onClick={() => toggleOption(option)}
                    >
                        {option}
                    </label>
                ))}
            </div>
        </form>
    );
}
