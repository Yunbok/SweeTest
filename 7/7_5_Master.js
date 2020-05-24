const cluster = require('cluster');
cluster.setupMaster({
	exec: '7_5_Worker.js',
});

var worker = cluster.fork();
worker.on('message',(msg)=>{
	console.log(msg);
});