import { initLoginPage } from "./statics/js/login.js";

initLoginPage()

// Maybe for using the JWT
/* const jwtToken = localStorage.getItem('jwtToken');

fetch('https://((DOMAIN))/api/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
    },
    body: JSON.stringify({
        query: 'votre_requête_graphql_ici'
    })
})
.then(response => response.json())
.then(data => {
    console.log('Réponse de l\'API GraphQL :', data);
})
.catch(error => {
    console.error('Erreur lors de la requête à l\'API GraphQL :', error);
}); */