import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      return config;
    });
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        }
        return Promise.reject(error);
      }
    );
  });
  return axiosSecure;
};

export default useAxiosSecure;
