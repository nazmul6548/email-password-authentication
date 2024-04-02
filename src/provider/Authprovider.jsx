import { createContext } from "react";


const Authprovider = ({children}) => {

    const AuthContext = createContext(null)
    const authInfo ={"sagor nodi jol"}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;