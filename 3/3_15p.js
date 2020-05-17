const http = require('http');

const port  = 8080;

//구름ide 프로젝트 -> 실행 URL과 포트 들어가서 포트번호와 URL 생성해주면됨

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, (err) => {
	if( err ) {
		console.log(err); 
		
	}
	console.log('server running');
});

