import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SignUp = () => {
  const { signUp, user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password).then((result) => {
      const { user } = result;
      if (user.email && user.uid) {
        const userInfo = {
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        };
        console.log("user post data", user.metadata.creationTime);
        axiosSecure.post("/users", { userInfo }).then((data) => {
          console.log("post data", data.data);
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user?.email} Successfully SignUp`,
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
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
              {errors.displayName?.type === "required" && <p className="text-red-600">Enter your name</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="text" placeholder="Your Email" className="input bg-yellow-50 " {...register("email", { required: true })} />
            </div>
            {errors.displayName?.type === "required" && <p className="text-red-600">Enter your Email</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input"
                {...register(
                  "password",
                  { required: true },
                  {
                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/,
                  }
                )}
              />
            </div>
            {errors.password?.type === "required" && <p className="text-red-600">Plz password</p>}
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
