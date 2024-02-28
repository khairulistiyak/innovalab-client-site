import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useServices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: services = [], refetch } = useQuery({
    queryKey: ["services", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`services?email`);
      return res.data;
    },
  });
  return [services];
};

export default useServices;
