import React from "react";
import { FaCartPlus, FaComment, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const navItem = (
    <>
      {/* ADMIN  */}
      {user?.email && (
        <>
          <li>
            <Link to={"/"} className="2xl">
              <FaHome></FaHome> User Home
            </Link>
          </li>

          <li className="text-orange-500">
            <Link to={""}>
              <FaCartPlus> </FaCartPlus> Book
            </Link>
          </li>
          <li>
            <Link to={""}>
              <FaComment /> Review
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
