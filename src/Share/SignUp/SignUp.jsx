import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { signUp, user } = useAuth();
  console.log(user);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password).then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-yellow-50">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="displayName"
                type="text"
                placeholder="Full Name"
                className="input bg-yellow-50 "
                {...register("displayName", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="text" placeholder="Your Email" className="input bg-yellow-50 " {...register("email", { required: true })} />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input"
                {...register("password", {
                  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/,
                })}
              />
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
