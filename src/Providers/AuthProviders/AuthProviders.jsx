import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sign up
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // update user profile
    const userProfileUp = (name, photo) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // get current user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set token
            if (currentUser) {
                axios.post("http://localhost:5000/jwt", {
                    email: currentUser.email,
                })
                    .then(res => {
                        const accessToken = res.data.token;
                        console.log(accessToken);
                        localStorage.setItem("access-token", accessToken);
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem("access-token");
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);


    // sign out
    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        userProfileUp,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;