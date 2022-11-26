import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    
    //User and Loading
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Google Provider Login
    const googleProviderLogin = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //Create User With Email and Password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign In with Email and Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Update User Profile
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    //User Log Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Reset Password
    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }

    //On Auth State Change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.uid) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    //Pass Data to all components
    const authInfo = {
        user,
        loading,
        setLoading,
        googleProviderLogin,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        resetPassword
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;