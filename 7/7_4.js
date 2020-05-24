const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
	var worker = cluster.fork();
	var timeout;

	console.log( 1 );

	worker.on('listening', (address) => {
		console.log( 3 );
		worker.send('recvmsg');
	});
} else if (cluster.isWorker) {
	const net = require('net');
		
	 var server = net.createServer((socket) => {
	 	 
	 });

	 server.listen(8080);

	console.log( 2 );

	process.on('message', (msg) => {
		console.log( 4 );
		if (msg === 'recvmsg') {
			console.log( "TEST");
		}
	});
}