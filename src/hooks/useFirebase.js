import { GoogleAuthProvider, getAuth, 
    signInWithPopup, onAuthStateChanged,
    signOut, createUserWithEmailAndPassword,
    sendEmailVerification, updateProfile,
    signInWithEmailAndPassword } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

// onAuthStateChanged : this hook is also known as observer hook
initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');


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

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then((result) => {
            // Email verification sent!
            console.log(result);
          });
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then((result) => {
          console.log("== Profile with username updated.. ", result);
        }).catch((error) => {
          console.log(error.message);
        });
    }

    const register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("Registered user: ", user);
              setError('');
    
              verifyEmail();
              setUserName(name);
            })
            .catch((error) => {
              console.log(error);
              setError(error.message);
            });
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('LoggedIn user: ', user);
            setError('');
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
    }

    return {
        signInUsingGoogle,
        register,
        loginUser
    }
}

export default useFirebase;