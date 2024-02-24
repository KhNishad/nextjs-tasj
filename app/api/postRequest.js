import { hostname } from "@/config";
import axios from "axios";
import { parseCookies } from "nookies";


export default async function postRequest(url, data, token = null) {
  const cookies = parseCookies();

  const config = {
    headers: {
      Authorization: token
        ? `Bearer ${token}`
        : cookies?.token
        ? `Bearer ${cookies?.token}`
        : "",
    },
  };

  console.log("url...",url);
  try {
    const res = await axios.post(`${hostname}/api/${url}`, data, config);
    if (res.hasOwnProperty("data")) {
      return res?.data;
    } else {
    }
  } catch (error) {
    return error?.response?.data;
  }
}
