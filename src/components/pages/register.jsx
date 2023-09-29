import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [userName, setUserName] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        try {
            // Register the user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Set the 'registered' state to true
            setRegistered(true);

            // Get the user's UID (unique identifier)
            const userUID = userCredential.user.uid;

            // Store user data in the Firebase Realtime Database or Firestore
            // Replace 'users' with your database reference
            const userRef = firebase.database().ref(`users/${userUID}`);
            userRef.set({
                username: userName,
                // You can add other user-related data here
            });

            // Store the user's name in localStorage (optional)
            localStorage.setItem("userName", userName);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login">
            <form onSubmit={signup}>
                <h2 className="login-title">Register Yelp</h2>
                <label>
                    <input
                        type="text"
                        placeholder="Your name"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                {registered ? (
                    <Link to={"/home"}>
                        <button type="submit" className="login-button">Register</button>
                    </Link>
                ) : (
                    <button type="submit" className="login-button">please again</button>
                )}
                <Link to={"/"} className="change-log">Login</Link>
            </form>
        </div>
    );
};

export default Register;
