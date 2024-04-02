import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const signInUser = (eamil,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,eamil,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth,)
    } 
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth,currenUser => {
            setUser(currenUser);
            console.log("observing",currenUser);
            setLoading(false);
        })
        return () => {
            unSubcribe()
        }
    })
    
    const authInfo ={user,createUser,signInUser,logOut,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;
Authprovider.propTypes = {
    children: PropTypes.node
};