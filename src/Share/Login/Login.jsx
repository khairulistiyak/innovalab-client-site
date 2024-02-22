import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-yellow-50">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-50">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input " required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input bg-slate-500" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning">Login</button>
          </div>
          <p className="text-center mt-5">
            New here?{" "}
            <Link to={"/signUp"} className="text-warning font-bold ">
              Create a New Account
            </Link>
          </p>
          <Link></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
