import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/stores";
export function getStores(user) {
    return http.post(apiEndPoint, {
        Emp_Code: user.userCode,
        Company_Code: user.companyCode
    })
}