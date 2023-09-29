import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';


const Home = () => {
    const [user, setUser] = useState(null);
    // const history = useHistory();

    useEffect(() => {
        // Check if the user is authenticated
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, set the user object
                setUser(user);
            } else {
                // User is not signed in, redirect to login or registration
                // history.push("/login"); // You can replace this with the registration page if needed
            }
        });

        return () => {
            // Unsubscribe from the observer when the component unmounts
            unsubscribe();
        };
    }, [history]);

    return (
        <div className="home">
            {user ? (
                <p>Welcome, {user.displayName}!</p>
            ) : (
                <p>Please log in to access this page.</p>
            )}
        </div>
    );
};

export default Home;
