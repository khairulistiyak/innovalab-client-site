import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
import { Navigate, useNavigate } from "react-router-dom";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: carts = [] } = useQuery({
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
  return { carts };
};

export default useCarts;
