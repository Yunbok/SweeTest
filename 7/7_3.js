//클러스터가 마스터에게 메세지 보내기 예제 - process.send 


const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {		//마스터일때 실행되는 부분
	console.log('마스터');
	var numReqs = 0;
	setInterval(() => {
		console.log('numReqs =', numReqs);
	}, 1000);

	var messageHandler = (msg) => {
		if (msg.cmd && msg.cmd == 'notifyRequest') {
			console.log("Noti!");
			numReqs += 1;
		}
	}

	const numCPUs = require('os').cpus().length;
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
		console.log("New Fork!");
	}

	Object.keys(cluster.workers).forEach((id) => {
		cluster.workers[id].on('message', messageHandler);
	});
}else{							//클러스터일때 실행되는 부분
	console.log('클러스터');	
	http.Server((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');

		process.send({ cmd: 'notifyRequest' });
	}).listen(8080);
}





/*


root@goorm:/workspace/SweeTest/7(master)# node 7_3.js
마스터
New Fork!
New Fork!
클러스터
클러스터
numReqs = 0
numReqs = 0
.....
numReqs = 0
numReqs = 0
Noti!						//웹서버로 접속하면 출력하고 1증가
Noti!
numReqs = 2
numReqs = 2
numReqs = 2
numReqs = 2
numReqs = 2
numReqs = 2
^C