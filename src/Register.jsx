import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons
import "./Register.css";
import Header from "./Header";
import Background from "./Background";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("Registration Successful");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.msg || "Error occurred");
        }
    };

    return (
        <>
            <Header />
            <div className="page-content"> {/* Keeps the form positioned properly */}
                <Background backgroundImage="https://as2.ftcdn.net/v2/jpg/01/03/44/23/1000_F_103442398_egouQ0FOh40HbV8nYlEmEeZ5raPdbUZ5.jpg">
                    <div className="container">
                        <section className="register-form">
                            <h1>REGISTER</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group1">
                                    <FaUser className="icon" /> {/* User Icon */}
                                    <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} />
                                </div>
                                <div className="input-group1">
                                    <FaLock className="icon" /> {/* Lock Icon */}
                                    <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                                </div>
                                <div className="input-group1">
                                    <FaLock className="icon" /> {/* Lock Icon */}
                                    <input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} />
                                </div>
                                <button type="submit">Register</button>
                            </form>
                            <p>
                                Already have an account? <a href="#" onClick={() => navigate("/login")}>Login</a>
                            </p>
                        </section>
                    </div>
                </Background>
            </div>
        </>
    );
}
