import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import app from "../firebaseConfig/Firebase.Config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create account
    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // updateProfile
    const profileUpdate = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }

    // loginAccount
    const loginAccount = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios
                  .post("http://localhost:5000/jwt", loggedUser, {withCredentials: true})
                  .then((res) => {
                    console.log('token response', res.data);
                  });
            }
            else {
                axios
                  .post("http://localhost:5000/logout", loggedUser, {
                    withCredentials: true,})
                  .then((res) => {
                    console.log(res.data);
                  });
            }
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
      user,
      loading,
      createAccount,
      loginAccount,
      profileUpdate,
      logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;