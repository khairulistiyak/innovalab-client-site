import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password).then((result) => {
      if (result.user.email) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result.user.email} Login success`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });

    console.log(data);
  };
  return (
    <div className="hero min-h-screen bg-yellow-50">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-50">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input " required {...register("email", { required: true })} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input bg-slate-500" required {...register("password", { required: true })} />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-warning">
              Login
            </button>
          </div>
          <p className="text-center mt-5">
            New here?{" "}
            <Link to={"/signUp"} className="text-warning font-bold ">
              Create a New Account
            </Link>
          </p>
          <Link></Link>
        </form>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
