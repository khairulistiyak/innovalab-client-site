import React from "react";
import useCarts from "../../../Hooks/useCarts";
import BookingList from "../BookingList/BookingList";

const BookIng = () => {
  const { carts } = useCarts();
  console.log(carts);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          {/* map  */}
          {carts?.map((item, index) => (
            <BookingList item={item} index={index} key={item._id}></BookingList>
          ))}
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default BookIng;
