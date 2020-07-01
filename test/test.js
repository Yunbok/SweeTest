/*const WebSocket = require('ws');
 
const ws = new WebSocket('ws://ybtest.run.goorm.io');

ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});*/

const fs = require('fs');
const http = require('http');
const WebSocket = require('ws');
var clients = new Map();
const server = http.createServer({
  
});
const wss = new WebSocket.Server({ server });
const strArr = ["한글", "윤복", "윤복1", "윤복2", "윤복3", "윤복4", "윤복5", "윤복6", "윤복7", "윤복8", "윤복9", "윤복10", "윤복11", "윤복12"];
var i = 0;

//wss.on('connection', function connection(ws) {
wss.on('connection', function connection(ws)  {
   
	
	ws.send(  "입력해야하는 단어 : "+strArr[i]);
	
		// ws.on('message', function incoming(message) {
		// console.log('received: %s', message);
		// ws.send(message);
		// });
	 //메세지 핸들러
	ws.on('message', function incoming(message) {
		//log the received message and send it back to the client
		console.log('received: %s', message);
		
		wss.clients.forEach(function e(client){
			if(message != "연결됨"){
				client.send(message);
			}
		});
		if(message == strArr[i]){
			i = i +1;
			if (i > 13){
				
			}
			wss.clients.forEach(function e(client){
				if(client == ws ){
					ws.send("정답입니다.");
				}else{
					client.send("다른사람 정답 다음문제로 넘어갑니다.");
				}
				
				if (i > 13){
					i = 0;
					client.send("종료되었습니다");
					client.send("--------------------------------------------");
					client.send("새게임");
					client.send("--------------------------------------------");
					client.send("입력해야하는 단어 : " + strArr[i]);	
				}else{
					client.send("입력해야하는 단어 : " + strArr[i]);	
				}
				
			});
		}
		
	});
  
});



server.listen(8080);