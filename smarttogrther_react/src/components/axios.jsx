import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://smartbackend-production.up.railway.app/api",
});

export default API;