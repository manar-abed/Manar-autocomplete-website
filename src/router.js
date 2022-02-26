const routerhandler = require('./handelrouter');
const https = require('https')
const path = require('path')
const fs = require('fs')

const router = (req, resp) => {
  const {url} = req;
  if(url === '/'){
    routerhandler('index.html',resp)

  }else if(url === '/style.css'){
    routerhandler('style.css',resp)

  }else if(url === '/image/ckjv6jx7700lscjfzuyspsnv0-customer-service-team-training.one-half.png'){
    routerhandler('image/ckjv6jx7700lscjfzuyspsnv0-customer-service-team-training.one-half.png',resp)

  }else if(url === '/js/Request.js'){
    routerhandler('js/Request.js',resp)

  }else if(url === '/js/Dom.js'){
    routerhandler('js/Dom.js',resp)

  }else if(url === '/phone'){
    const filepath = path.join(__dirname,'phones.json');
    fs.readFile(filepath, (err, data) => {
        if (err) {
          resp.writeHead(500); 
          resp.end("Server Error");
          return;
        } else {
          resp.writeHead(200, {"Content-Type": 'application/json'}); 
          resp.end(data);
        }
      });

  }else if(url.includes("/search")){
      let searchword = (url.split('/')[2])
      console.log(searchword,11)
      https.get(`https://api-mobilespecs.azharimm.site/v2/search?query=${searchword}`, (respdata) =>{
        let allData = ''
        respdata.on('data' , (ShuckOfData) =>{
          allData += ShuckOfData;
        });
        respdata.on('end',()=>{
          const ConvartData = JSON.parse(allData)
          console.log(ConvartData,22)

          resp.writeHead(200, { "Content-Type": 'application/json'})
          resp.end(JSON.stringify(allData))
        })
      }).on('error',(err)=>{
        console.log("Error: " + err.message)
      })
  }else{
    resp.writeHead(500)
    resp.end('SERVER ERROR')
  }
}

module.exports = router;
