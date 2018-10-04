const http = require('http'); 	//Definindo o protocolo do servidor node

const hostname = '127.0.0.1'; 	//Definindo o IP do servidor
const port = 3000; 				//Definindo a porta de comunicação com o servidor


const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello Word\n');
});

server.listen(port, hostname, () =>{
	console.log(`Server running at http://${hostname}:${port}/`);
});

