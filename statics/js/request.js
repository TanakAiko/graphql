import { displayUserInfo, histograph, pieChart } from "./graph.js";
import { getJWT } from "./utils.js";

export function request(query) {
    const jwtToken = getJWT();
    if (jwtToken === false) return false;

    fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
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
                if (data.errors['0'].message === "Could not verify JWT: JWTExpired") {
                    localStorage.removeItem("jwtToken")
                    initLoginPage()
                }
                console.error('GraphQL Errors:', data.errors);
            } else {
                displayUserInfo(data)
                histograph(data)
                pieChart(data.data.user['0'])
            }
        })
        .catch(error => {
            console.error('Error fetching from the GraphQl API:', error);
        });
}
