const http = require('http');
require('env2')('.env');
const router = require('./router');

const server = http.createServer(router);

const PORT = 8080 || process.env.PORT;
const HOST = 'localhost' || process.env.HOST;

server.listen(PORT, () => {
  console.log(`the server is listing at http://${HOST}:${PORT}`);
});
