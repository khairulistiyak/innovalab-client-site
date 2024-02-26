import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { user, LogOut } = useAuth();
  const handleLogout = () => {
    LogOut()
      .then(() => {
        console.log("logout");
      })
      .catch(() => {
        console.log(error);
      });
  };
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Service</a>
      </li>
      <li>
        <a>Our Team</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      {user && (
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
      <li>
        <Link to={"/dashboard"}>
          <FaCartPlus className="text-2xl bg-warning"></FaCartPlus>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className="w-8">
              <img src="https://i.ibb.co/dbCssPp/logo.png" alt="" />
            </div>
            <div>
              <h1 className="uppercase">Innovate</h1>

              <h2 className="text-warning uppercase">Lab</h2>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>

        <div className="navbar-end">
          <div className="me-5 font-bold">{user && <>{user.email}</>}</div>
          {user ? (
            <button onClick={handleLogout} className="btn btn-warning">
              LogOut
            </button>
          ) : (
            <Link to={"/Login"}>
              <button className="btn btn-warning">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
