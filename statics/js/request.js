import { getJWT } from "./utils.js";


export function request(query) {
    const jwtToken = getJWT();
    if (jwtToken === false) return false;

    console.log('Just before fetch');
    fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => {
            console.log('The status ***************request***************', response.status);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            if (data.errors) {
                console.error('GraphQL Errors:', data.errors);
            } else {
                console.log('Data:', data);
                
                // Ici, vous pouvez faire quelque chose avec les données récupérées
            }
        })
        .catch(error => {
            console.error('Error fetching from the GraphQl API:', error);
        });
}
