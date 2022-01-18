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
    const [user, setUser] = useState({}); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
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
        return createUserWithEmailAndPassword(auth, email, password);
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

    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogOut = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
          setUser({});
        }).catch((error) => {
          // An error happened.
        });
  }

    // observe whether user state is changed or not
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("## onAuthStateChanged USER: ", user);
            setUser(user);
          } else {
            // User is signed out
            // ...
          }
        });
    }, []);

    return {
        user,
        signInUsingGoogle,
        register,
        loginUser,
        signIn,
        verifyEmail,
        setUserName,
        googleLogOut
    }
}

export default useFirebase;