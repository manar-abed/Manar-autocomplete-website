const http = require('http');
const router = require('./router');

const server = http.createServer(router);

const PORT = 8080;
const HOST = 'localhost';

server.listen(PORT, () => {
  console.log(`the server is listing at http://${HOST}:${PORT}`);
});
