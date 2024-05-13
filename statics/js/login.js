import { request } from "./request.js";
import { queryAuditRatio, queryGetUserInfo } from "./query.js";


export function initLoginPage() {
    fetch('../../templates/loginPage.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data

            listenForm()

        })
        .catch(error => console.error('Error while fetching the loginPage.html', error))

}

function listenForm() {
    document.getElementById('login-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value

        console.log('username : ', username);
        console.log('password : ', password);

        const credentials = btoa(`${username}:${password}`);

        // Envoyer les informations d'identification au serveur pour authentification
        fetch('https://learn.zone01dakar.sn/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`
            },
        })
            .then(response => {
                console.log('The status ***************login***************', response.status);
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
                console.log('response ====> ', response);
                return response.json();
            })
            .then(data => {
                //console.log('JWT reçu :', data);
                // Ici, vous pouvez stocker le JWT dans le localStorage ou le sessionStorage
                localStorage.setItem('jwtToken', data);
                
                request(queryGetUserInfo)
                request(queryAuditRatio)
            })
            .catch(error => {
                console.error('************ Erreur lors de la récupération du JWT :', error);
            })

    })
}
