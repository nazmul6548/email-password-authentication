import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center text-center">
            
            <span className="loading loading-spinner loading-lg "></span>
            </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default Privateroute;
Privateroute.PropTypes={
children: PropTypes.node
}