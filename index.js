const http = require ('http');
const fs= require('fs');
const server =http .createServer((req, res)=>{
    if(req.url=== "/style.css"){
        res.writeHead(200, {"Content-type": "text/css"});
        res.end(fs.readFileSync("style.css"));
    } else if(req.method === 'POST'){
        let body="";
        req.on('data', chunk => {
            body += chunk,toString();
        });
        req.on('end', ()=> {
            try{
                const newOrder = JSON.parse(body);
            } catch (error){
                res.writeHead(400, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify({error:'Invalid JSON'}));
            }
        });
    }

});
server.listen(3000);