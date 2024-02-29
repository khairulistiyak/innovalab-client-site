import React from "react";

const BookingList = ({ item, index }) => {
  console.log(item);
  const { service_title, category, description, image, uni: _id } = item;
  return (
    <tbody>
      {/* row 1 */}
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
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
    </tbody>
  );
};

export default BookingList;
