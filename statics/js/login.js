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
            body: JSON.stringify({
                key: 'value'
            })
        })
            .then(response => {
                console.log('response.ok : ', response.ok);
                if (!response.ok) {
                    throw new Error('Erreur de connexion');
                }
                console.log('response ====> ', response);
                return response.json();
            })
            .then(data => {
                console.log('JWT reçu :', data.token);
                // Ici, vous pouvez stocker le JWT dans le localStorage ou le sessionStorage
                localStorage.setItem('jwtToken', data.token);
            })
            .catch(error => {
                console.error('************ Erreur lors de la récupération du JWT :', error);
            })

    })
}