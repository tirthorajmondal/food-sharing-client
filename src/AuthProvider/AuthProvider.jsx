import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { toast, Zoom } from "react-toastify";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app)

    // google auth info
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // create account
    const createAcconut = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email password sign in
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update profile
    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }

    // logout
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user:', currentUser);
            setUser(currentUser);
            // currentUser !== null && toast.info(`Welcome back ${currentUser?.displayName.toUpperCase()}`, {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     transition: Zoom,
            // });
        })
        return () => unsubscribe()
    }, [user])

    const authInfo = {
        user,
        setUser,
        googleSignIn,
        createAcconut,
        emailSignIn,
        updateUserProfile,
        logout,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;