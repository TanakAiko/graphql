import { initLoginPage } from "./login.js"
import { homePageData } from "./utils.js"

export function initHomePage() {
    fetch('../../templates/home.html')
        .then(response => response.text())
        .then(data => {
            //console.log('*******************************************\n', data, '\n*******************************************\n');
            document.body.innerHTML = data
            //document.body.appendChild = data
            listenLogoutForm()      
        })
        .catch(error => console.error('Error while fetching the loginPage.html', error))
        //document.body.innerHTML = homePageData

}

function listenLogoutForm() {
    document.getElementById('logout-form').addEventListener('submit', async function (event) {
        event.preventDefault()
        localStorage.removeItem("jwtToken")
        initLoginPage()
    })
}