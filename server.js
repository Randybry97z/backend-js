const http = require('http')

function responsePetition (request, response) {
	response.end('Hola babu')
}

let server = http.createServer(responsePetition);

server.listen(3000)