import { GoogleAuthProvider, getAuth, 
    signInWithPopup, onAuthStateChanged,
    signOut } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

// onAuthStateChanged : this hook is also known as observer hook
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("== user: ", user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log("== error in google Login: ", errorMessage);
            });

    }

    return {
        signInUsingGoogle
    }
}

export default useFirebase;