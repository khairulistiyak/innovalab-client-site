import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import app from "../../firebase/firebase.config";

import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <div className="hero min-h-screen bg-yellow-50">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input bg-yellow-50 " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input " required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-warning">
                SignUp
              </button>
            </div>
            <p className="text-center mt-5">
              Already registered?
              <Link to={"/login"} className="text-warning font-bold ms-1 ">
                Go to log in
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
