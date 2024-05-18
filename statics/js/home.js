import { initLoginPage } from "./login.js"

export function initHomePage() {
    fetch('../../templates/home.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data
            listenLogoutForm()      
        })
        .catch(error => console.error('Error while fetching the loginPage.html', error))
}

function listenLogoutForm() {
    document.getElementById('logout-form').addEventListener('submit', async function (event) {
        event.preventDefault()
        localStorage.removeItem("jwtToken")
        initLoginPage()
    })
}