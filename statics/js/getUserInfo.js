import { getJWT } from "./utils.js";

export function getUserInfo() {
    const jwtToken = getJWT();
    if (jwtToken === false) return false;
    // Définition de la requête GraphQL
    const queryGetUserInfo = `
        query {
            user {
                id
                name
                email
            }
        }
    `;

    console.log('Just before fetch');
    fetch('https://learn.zone01dakar.sn', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ query: queryGetUserInfo })
    })
        .then(response => {
            console.log('The status ***************getUserInfo***************', response.status);
            if (!response.ok) {
                throw new Error('Failed to fetch user info.');
            }
            return response.json();
        })
        .then(data => {
            if (data.errors) {
                console.error('GraphQL Errors:', data.errors);
                // Gérer les erreurs spécifiques à GraphQL ici
            } else {
                console.log('User Info:', data);
                // Ici, vous pouvez faire quelque chose avec les données récupérées
            }
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
}
