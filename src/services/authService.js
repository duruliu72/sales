import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/userlogin";
const reEndPoint = apiUrl + "/refresh";
const tokenKey = "token";
http.setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt.token);
}
export async function logrefresh(companyCode, userCode, storeCode) {
  return await http.post(reEndPoint, {
    Company_Code: companyCode,
    Emp_Code: userCode,
    Store_Code: storeCode
  });
  // if (!data.status) {
  //   console.log(data.status);
  // } else {
  //   localStorage.setItem(tokenKey, data.token);
  // }
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
  const user = {};
  try {
    const jwt = localStorage.getItem(tokenKey);
    const tokendata = jwtDecode(jwt);
    user.companyCode = tokendata.companyCode;
    user.companyName = tokendata.companyName;
    user.userCode = tokendata.userCode;
    user.userName = tokendata.userName;
    user.storeCode = tokendata.storeCode;
    user.storeName = tokendata.storeName;
    // console.log(user);
    return user;
  } catch (ex) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}
export default {
  login,
  logrefresh,
  logout,
  getCurrentUser,
  getJwt
};
