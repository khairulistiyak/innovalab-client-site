import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useNavigate } from "react-router-dom";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: carts, refetch } = useQuery({
    queryKey: ["cart"],

    queryFn: async () => {
      if (user.email) {
        const response = await axiosSecure.get("/carts");
        return response.data;
      } else {
        return navigate("/login");
      }
    },
  });
  return { carts, refetch };
};

export default useCarts;
