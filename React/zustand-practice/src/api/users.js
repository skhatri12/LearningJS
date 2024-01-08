import axios from "axios";

export const getUsers = () => axios.get("http://localhost:5000/users");

export const createUser = (name) => {
  return axios.post("http://localhost:5000/users", { name });
};