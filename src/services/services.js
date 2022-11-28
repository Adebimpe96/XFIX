import axios from "axios";
import _routes from "./service-routes";

const service = {
  setToken: (token) => localStorage.setItem("auth-token", token),
  getToken: () => localStorage.getItem("auth-token"),
  removeToken: () => localStorage.removeItem("auth-token"),
};

export default service;
