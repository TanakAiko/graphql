import { initLoginPage } from "./login.js"
import { homeHTML } from "./pages.js";

export function initHomePage() {
    document.body.innerHTML = homeHTML
    listenLogoutForm()
}

function listenLogoutForm() {
    document.getElementById('logout-form').addEventListener('submit', async function (event) {
        event.preventDefault()
        localStorage.removeItem("jwtToken")
        initLoginPage()
    })
}