import { request } from "./statics/js/request.js";
import { initLoginPage } from "./statics/js/login.js";
import { queryGetUserInfo, queryAuditRatio } from "./statics/js/query.js";

initLoginPage()

document.addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        request(queryGetUserInfo)
        
        //request(queryAuditRatio)
    }
})
