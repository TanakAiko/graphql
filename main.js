import { initLoginPage } from "./statics/js/login.js";
import { queryGetUserInfo } from "./statics/js/query.js";
import { request } from "./statics/js/request.js";


initLoginPage()

document.addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        request(queryGetUserInfo)
    }
})
