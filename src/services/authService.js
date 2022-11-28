import axios from "axios";
import _routes from "./service-routes";

const authService = {
  registerVendor: async (postBody) => {
    const res = await axios.post(_routes.registerVendor, postBody);
    return res.data;
  },
  registerCustomer: async (postBody) => {
    const res = await axios.post(_routes.registerCustomer, postBody);
    return res.data;
  },
  login: async (postBody) => {
    const res = await axios.post(_routes.login, postBody);
    return res.data;
  },
};

export default authService;
