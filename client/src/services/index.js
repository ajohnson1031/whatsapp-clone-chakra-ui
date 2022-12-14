import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
