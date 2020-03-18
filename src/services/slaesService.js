import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPointvalidstaff = apiUrl + "/validstaff";
const apiEndPointarticle = apiUrl + "/article";
const promotion_article = apiUrl + "/promotion_article";
export function getStaff(bean) {
    return http.post(apiEndPointvalidstaff, {
        Company_Code: bean.companyCode,
        Store_Code: bean.storeCode,
        Staff_Code: bean.staffCode
    })
}
export function getArticle(bean) {
    return http.post(apiEndPointarticle, {
        Company_Code: bean.companyCode,
        Store_Code: bean.storeCode,
        Article_Code: bean.articleCode
    })
}
export function getPromoOnArticle(bean) {
    return http.post(promotion_article, {
        Company_Code: bean.companyCode,
        Store_Code: bean.storeCode,
        Article_Code: bean.articleCode
    })
}