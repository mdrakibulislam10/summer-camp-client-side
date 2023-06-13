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

    // get current user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                // console.log(currentUser);
                const { displayName, email, photoURL } = currentUser;
                const saveUser = {
                    name: displayName,
                    email,
                    photo: photoURL,
                    role: "student", // user;
                };

                axios.post("http://localhost:5000/users", saveUser)
                    .then(res => {
                        const data = res.data;
                        if (res.data.insertedId) {
                            // console.log(res.data.insertedId);
                        }
                    })
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // update user profile
    const userProfileUp = (name, photo) => {
        return updateProfile(auth?.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // sign out
    const logOut = () => {
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