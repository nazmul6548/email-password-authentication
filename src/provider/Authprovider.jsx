import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

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
    const signwithgoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
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
    
    const authInfo ={user,createUser,signInUser,logOut,loading,signwithgoogle}
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