const cluster = require('cluster');
cluster.setupMaster({
	exec: '7_5_Worker.js',
	args: ['--use', 'https'],
});
var worker = cluster.fork(); // https worker
cluster.setupMaster({
	exec: '7_6_Worker.js',
	args: ['--use', 'http']
});
var worker2 = cluster.fork(); // http worker


worker.on('message',(msg)=>{
	console.log(msg);
})
.on('error',()=>{
	console.log("ERROR");
}).on('exit',(code, signal)=>{
	if (signal) {
		console.log(`worker was killed by signal: ${signal}`);
	} else if (code !== 0) {
		console.log(`worker exited with error code: ${code}`);
	} else {
		console.log('worker success!');
	}
});


worker2.on('message',(msg)=>{
	console.log(msg);
})
.on('error',()=>{
	console.log("ERROR");
}).on('exit',(code, signal)=>{
	if (signal) {
		console.log(`worker was killed by signal: ${signal}`);
	} else if (code !== 0) {
		console.log(`worker exited with error code: ${code}`);
	} else {
		console.log('worker success!');
	}
});