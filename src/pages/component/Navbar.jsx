import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";


const Navbar = () => {
  const {user,logOut} =useContext(AuthContext)

  const handleclick = () => {
logOut()
    .then(()=>{
console.log("khobor hy gece");
    })
    .catch((error) => {
      console.error(error.message);
    })
  }


    const navbarlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">LogIn</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
          user && <>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/notice">Notice</NavLink></li>
          </>
        }
        
        </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navbarlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navbarlink}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
            <span>{user.email}</span>
            <a onClick={handleclick} className="btn">SignOut</a>
            
            </>:
            <Link to="/login">
              <button className="btn">LogIn</button>
            </Link>
          }
        </div>
      </div>
    );
};

export default Navbar;