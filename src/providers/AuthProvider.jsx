import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import app from "../firebaseConfig/Firebase.Config";

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
            setUser(currentUser);
            setLoading(false);
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