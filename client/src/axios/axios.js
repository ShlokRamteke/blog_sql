import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog-sql-backend.onrender.com/api/",
});

export default instance;
