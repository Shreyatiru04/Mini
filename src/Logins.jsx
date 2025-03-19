import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons
import "./Login.css";
import Header from "./Header";
import Background from "./Background";

export default function Logins() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/login", formData);
            alert("Login Successful");
            navigate("/home"); // ✅ Navigate to Explore Page
        } catch (err) {
            alert(err.response?.data?.msg || "Error occurred");
        }
    };

    return (
        <>
            <Background backgroundImage="https://as2.ftcdn.net/v2/jpg/01/03/44/23/1000_F_103442398_egouQ0FOh40HbV8nYlEmEeZ5raPdbUZ5.jpg">
                <Header />
                <div className="container1">
                    <div className="login-box">
                        <h2>LOGIN</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FaUser className="icon" /> {/* User Icon */}
                                <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" /> {/* Lock Icon */}
                                <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                            </div>
                            <button className="login-btn" type="submit">Login</button>
                        </form>
                        <div className="forgot-links">
                            <p>Not having an account? <a href="#" onClick={() => navigate("/register")}>Register</a></p>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    );
}
