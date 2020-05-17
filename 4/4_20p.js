const http = require('http');


const server = http.createServer((req,res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log("ip ", ip);
	console.log("url ", req.url);
	console.log("headers  ", req.headers);
	
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n' + JSON.stringify( req.headers , null, 4));
});

//이전 예제에서 8080 사용했으니 8080으로 변경
server.listen(8080, (err) => {
	if( err ) {
		console.log(err); 
		
	}
	console.log('server running');
});


