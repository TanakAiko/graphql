import { displayUserInfo, histograph, rectAddListener } from "./graph.js";
import { getJWT } from "./utils.js";

export function request(query) {
    const jwtToken = getJWT();
    if (jwtToken === false) return false;

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
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            if (data.errors) {
                console.error('GraphQL Errors:', data.errors);
            } else {
                displayUserInfo(data)
                histograph(data)
            }
        })
        .catch(error => {
            console.error('Error fetching from the GraphQl API:', error);
        });
}
