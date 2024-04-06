// import { useContext } from "react";
// import { AuthContext } from "../provider/Authprovider";


const Home = (data) => {
    // const authInfo = useContext(AuthContext)
    // console.log(authInfo);
    return (
        <div>
            <h3>this is home</h3>
            {
                data.children
            }
        </div>
    );
};

export default Home;