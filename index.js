const http = require ('http');
const fs= require('fs');
const querystring= require('querystring');
const server =http .createServer((req, res)=>{
    if(req.url=== "/style.css"){
        res.writeHead(200, {"Content-type": "text/css"});
        res.end(fs.readFileSync("style.css"));
    } else if(req.method === "POST"){
        let body="";
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', ()=> {
            const formData= querystring.parse(body);
            console.log(formData);
            
            res.writeHead(200,{"Content-type":"application/json"});
            res.end(JSON.stringify({
                message:"Order received",
                data:formData
            }));
        });
    }

});
server.listen(3000);