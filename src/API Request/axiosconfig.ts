import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://staywise.onrender.com";

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
