import { queryGetUserInfo } from "./query.js";
import { initHomePage } from "./home.js";
import { request } from "./request.js";

export function initLoginPage() {
    if (localStorage.getItem('jwtToken')) {
        request(queryGetUserInfo)
        initHomePage()
        return
    }
    fetch('../../templates/loginPage.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data
            listenLoginForm()
        })
        .catch(error => console.error('Error while fetching the loginPage.html', error))
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
                        throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
                    }
                    else if (response.status === 500) {
                        throw new Error('Erreur côté serveur. Veuillez réessayer plus tard.');
                    } else {
                        throw new Error('Erreur de connexion');
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
                console.error('Erreur lors de la récupération du JWT :', error);
            })

    })
}
