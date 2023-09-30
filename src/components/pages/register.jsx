// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from '../config/firebase';
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import "../styles/login.css";

// const Register = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [userName, setUserName] = useState("");
//     const [registered, setRegistered] = useState(false);
//     const [verificationCode, setVerificationCode] = useState("");
//     const [verificationError, setVerificationError] = useState("");
//     const navigate = useNavigate();

//     const signup = async (e) => {
//         e.preventDefault();
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Send verification code
//             // await sendVerificationCode(user);

//             setRegistered(true);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     // const sendVerificationCode = async (user) => {
//     //     try {
//     //         const actionCodeSettings = {
//     //             url: `${window.location.origin}/home`,
//     //             handleCodeInApp: true,
//     //         };

//     //         await sendEmailVerification(user, actionCodeSettings);
//     //     } catch (err) {
//     //         setVerificationError(err.message);
//     //     }
//     // };

//     return (
//         <div className="login">
//             <form onSubmit={signup}>
//                 <h2 className="login-title">Register Yelp</h2>
//                 <label>
//                     <input
//                         type="text"
//                         placeholder="Your name"
//                         onChange={(e) => setUserName(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="email"
//                         placeholder="Enter Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Enter Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     {/* {registered && (
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Verification Code"
//                                 onChange={(e) => setVerificationCode(e.target.value)}
//                                 value={verificationCode}
//                                 required
//                             />
//                             <button type="button" onClick={() => sendVerificationCode(auth.currentUser)}>Resend Code</button>
//                             {verificationError && <p>{verificationError}</p>}
//                         </div>
//                     )} */}
//                 </label>
//                 <button type="submit" className="login-button">
//                     {/* {registered ? "Verify and Register" : "Register"} */}Register
//                 </button>
//                 <Link to={"/"} className="change-log">Login</Link>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [registered, setRegistered] = useState(false);

    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setRegistered(true);
            navigate('/home');
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
                <button type="submit" className="login-button">Register</button>
                <Link to={"/"} className="change-log">Login</Link>
            </form>
        </div>
    );
};

export default Register;
