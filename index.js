var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req,res) {
    if(req.url=="/"){
        let data = fs.readFileSync('home.html');
        res.end(data);
    }
    else if(req.url=="/about"){
        let data = fs.readFileSync('about.html');
        res.end(data);
    }
    else if(req.url=="/contact"){
        let data = fs.readFileSync('contact.html');
        res.end(data);
    }
    else if(req.url=="/terms"){
        let data = fs.readFileSync('terms.html');
        res.end(data);
    }
});

server.listen();
console.log("Server run success");