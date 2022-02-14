const http = require('http');
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT;

app.set('port', port);
const server = http.createServer(app);
console.log(`Connexion au port ${port} ok ! Bienvenu sur le back-end de Groupomania`);
server.listen(port);