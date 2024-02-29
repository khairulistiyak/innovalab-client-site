import React from "react";
import useAuth from "../../../Hooks/useAuth";

const BookingList = ({ item, index }) => {
  const { user } = useAuth();
  const { service_title, category, description, image, uni: _id } = item;
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{service_title}</div>
            </div>
          </div>
        </td>
        <td>{category}</td>
        <td>{user?.email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  );
};

export default BookingList;
