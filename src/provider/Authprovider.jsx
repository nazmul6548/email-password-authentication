import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const signInUser = (eamil,password) => {
        return signInWithEmailAndPassword(auth,eamil,password)
    }

    const logOut = () =>{
        return signOut(auth,)
    } 
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth,currenUser => {
            setUser(currenUser);
            console.log("observing",currenUser);
        })
        return () => {
            unSubcribe()
        }
    })
    
    const authInfo ={user,createUser,signInUser,logOut}
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