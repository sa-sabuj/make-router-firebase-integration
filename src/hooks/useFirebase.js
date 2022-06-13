import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import App from "../firebase.init";

const auth = getAuth(App)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
    }

    const handelSignOut = () => {
        signOut(auth)
            .then()
            .catch()
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return {
        user,
        signInWithGoogle,
        handelSignOut
    }

};

export default useFirebase;