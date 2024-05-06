import { initLoginPage } from "./statics/js/login.js";
import express from "express"

const app = express()
const port = 5000;

app.get('/', (req, res) => {
    initLoginPage();
});

app.get('/home', (req, res) => {
    res.send('Home page !')
})

app.listen(port, () => {
    console.log(`Serveur en cours d'écoute sur le port ${port}`);
});

/* import http from "http";

const host = 'localhost';
const port = 5000;

function serverFunc(req, res) {
    if (req.url === '/') {
        initLoginPage()
    } else if ( req.url === '/login') {
        res.end('ACCEEEESSSSSSSSSSSSSSSSS')
    }
}


const server = http.createServer(serverFunc)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
 */
