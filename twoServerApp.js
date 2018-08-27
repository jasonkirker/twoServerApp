var http = require("http");

var PORT = 7000;

function handleRequest(request, response){
    response.end("You are doing great in life!" + request.url)
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log(`server is listening on http://localhost:${PORT}`);
})