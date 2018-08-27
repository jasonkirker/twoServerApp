var http = require("http");

var nice_PORT = 7000;
var mean_PORT = 7500;

// good_PORT 7000 - positive notes
function handleRequest_nice(request, response){
    response.end("You're doing great in life.");
}    

function handleRequest_mean(request, response) {
    response.end("You need to figure your life out.");
}
// ==========

var server_nice = http.createServer(handleRequest_nice);
var server_mean = http.createServer(handleRequest_mean);
// ==========

server_nice.listen(nice_PORT, function(){
    console.log(`Server listening on http://localhost:${nice_PORT}`);
});

server_mean.listen(mean_PORT, function(){
    console.log(`Server listening on http://localhost:${mean_PORT}`);
});