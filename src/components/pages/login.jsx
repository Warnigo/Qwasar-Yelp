import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setLogin(true);
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h2 className="login-title">Login Yelp</h2>
                <label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <Link to={"/forgot-password"}>
                    <p>Forgot your password</p>
                </Link>
                <button type="submit" className="login-button">Login</button>
                <Link to={"/register"} className="change-log">
                    Register now
                </Link>
            </form>
        </div>
    );
};

export default Login;
