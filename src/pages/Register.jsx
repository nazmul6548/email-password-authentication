import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";


const Register = () => {

const {createUser} = useContext(AuthContext)
const [error,setError] =useState("")
const [emerror,setEmerror] =  useState("")
// console.log(createUser);



const registerhandler = (e) => {
e.preventDefault()
const name  = e.target.name.value;
const photo =e.target.photo.value;
const email =e.target.email.value;
const password =e.target.password.value;
const confirm = e.target.Confirmpassword.value;



if (!/@gmail\.com$/.test(email)) {
  setEmerror("d")
  return
}



if (password.length < 6) {
  setError("password must be at least 6 characters")
  return
}
if (password !== confirm) {
  setError("password didn't match");
  return
  
}
if (!/^(?=.*\d.*\d).+/.test(password)) {
  setError("hey add at least two numbers");
  return
}
if (!/^(?=(.*[\W]){2}).+/.test(password)) {
  setError("please add special characters like @#$%")
  return
}
setError("")
setEmerror("")
console.log(name,photo,email,password,confirm);


createUser(email,password)
.then(result => {
    console.log(result.user);
})
.catch((error) => {
    setError(error.message);
})
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={registerhandler} className="card-body">


            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
              </div>






              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="photo" name="photo" placeholder="Photo" className="input input-bordered" required />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>



              




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                


                <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="Confirmpassword" placeholder="confirm password" className="input input-bordered" required />
                
                {/* <label className="label">
                 
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>




             
              </div>



            


              {
                  error &&  <p>{error}</p>
                }
                {
                  emerror && <p>{emerror}</p>
                }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="p-3 ml-4">You are already register ? go to <NavLink className="underline font-bold" to="/login">Login</NavLink></p>
          </div>
         
        </div>
      </div>
    );
};

export default Register;