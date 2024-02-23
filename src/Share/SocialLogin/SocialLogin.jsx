import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="pb-8">
      <div className="grid justify-center grid-cols-3 text-center">
        <div>
          <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline btn-warning ">
            <FaGoogle className="text-2xl  text-gray-800" />
          </button>
        </div>
        <div>
          <button className="btn btn-circle btn-outline  btn-warning">
            <FaFacebook className="text-3xl text-gray-700" />
          </button>
        </div>
        <div>
          <button className="btn btn-circle btn-outline  btn-warning">
            <FaGithub className="text-3xl text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;