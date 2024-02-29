import React from "react";
import useCarts from "../../../Hooks/useCarts";
import BookingList from "../BookingList/BookingList";
import useAuth from "../../../Hooks/useAuth";

const BookIng = () => {
  const { carts } = useCarts();
  const { user } = useAuth();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            {/* service_title, category, description, image, uni: _id */}
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Category</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          {/* map  */}
          {carts?.map((item, index) => (
            <BookingList item={item} index={index} key={item._id}></BookingList>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BookIng;
