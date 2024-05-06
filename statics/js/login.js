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
    var loginForm = document.getElementById('login-form')
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value

        console.log('username : ', username);
        console.log('password : ', password);
        // Envoyer les informations d'identification au serveur pour authentification
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Stocker le JWT côté client (par exemple, dans les cookies ou le stockage local)
            localStorage.setItem('token', data.token);
            // Rediriger l'utilisateur vers une page sécurisée ou effectuer d'autres actions
            window.location.href = '/dashboard';
        } else {
            // Afficher un message d'erreur
            console.error('Login failed:', data.error);
        }

    })
}