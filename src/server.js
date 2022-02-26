const http = require('http');
require('env2')('.env');
const router = require('./router');

const server = http.createServer(router);

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

server.listen(PORT, () => {
  console.log(`the server is listing at http://${HOST}:${PORT}`);
});
