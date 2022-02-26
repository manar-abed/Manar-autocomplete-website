const path = require('path');
const fs = require('fs');

const routerhandler = (url , resp) => {
    const filepath = path.join(__dirname, "..", "public", url);
    const extanation = path.extname(url);

    let ContentType = 'text/html';

    switch(extanation){
    case '.css' : 
        ContentType = 'text/css'
        break;
    case '.html':
        ContentType = 'text/html'
        break;
    case '.js':
        ContentType = 'text/javascript'
        break;
    case '.json':
        ContentType = 'application/json'
        break;
    case '.png':
        ContentType = 'image/png'
        break;
    case '.jpg':
        ContentType = 'image/jpg'
}

    fs.readFile(filepath, (err, data) => {
        if (err) {
          resp.writeHead(500); // respponse header
          resp.end("Server Error");
          return;
        } else {
          resp.writeHead(200, { "Content-Type": ContentType }); 
          resp.end(data);
        } // finish html file else end
      });
}

module.exports = routerhandler;