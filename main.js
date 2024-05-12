/* import { getUserInfo } from "./statics/js/getUserInfo.js";
import { initLoginPage } from "./statics/js/login.js";

initLoginPage()

document.addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        console.log('addListener');
        getUserInfo()
    }
}) */

const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.use('/proxy', (req, res) => {
    const url = 'https://learn.zone01dakar.sn/' + req.url;
    req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});

/* 
function fetchData() {
    console.log('fetchData start !!!');
    // Récupérer le jeton JWT depuis le localStorage
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
        console.error('JWT Token not found');
        return;
    }

    // Effectuer une requête à l'API avec le jeton JWT pour récupérer des données
    fetch('https://learn.zone01dakar.sn/api/data', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données du site');
        }
        return response.json();
    })
    .then(data => {
        // Traiter les données récupérées
        console.log('Données récupérées :', data);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données du site :', error);
    });
    console.log('fetchData end !!!');
} */
