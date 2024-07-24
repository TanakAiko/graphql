import { queryGetUserInfo } from "./query.js";
import { initHomePage } from "./home.js";
import { request } from "./request.js";
import { loginHTML } from "./pages.js";
import { createPopup } from "./utils.js";

export function initLoginPage() {
    if (localStorage.getItem('jwtToken')) {
        request(queryGetUserInfo)
        initHomePage()
        return
    }
    document.body.innerHTML = loginHTML
    listenLoginForm()
}

function listenLoginForm() {
    document.getElementById('login-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const credentials = btoa(`${username}:${password}`);

        fetch('https://learn.zone01dakar.sn/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`
            },
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Username or password incorrect');
                    }
                    else if (response.status === 500) {
                        throw new Error('Error on the server side.Please try again later.');
                    } else {
                        throw new Error('Connexion error');
                    }
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('jwtToken', data);
                request(queryGetUserInfo)
                initHomePage()
            })
            .catch(error => {
                console.error('Error when recovering the JWT: ', error);
                createPopup('Username or password incorrect')
            })

    })
}
