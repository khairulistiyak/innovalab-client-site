import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const momentTime = (timeAndDate) => {
    const timestamp = timeAndDate;
    const formattedDate = moment(timestamp, "ddd, DD MMM YYYY HH:mm:ss z").format("YYYY-MM-DD HH:mm");
    return formattedDate;
  };

  console.log(momentTime("Thu, 29 Feb 2024 07:33:21 GMT"));
  return (
    <div>
      <h1 className="text-2xl uppercase font-bold my-10">All user : {users?.length} </h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined on</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td> {momentTime(user.lastSignInTime)}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
