const http = require('http');

http.get('http://www.google.co.kr/' , (res)=> {
	let body ='';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',() => {
		console.log("DATA: " , body);
	});
	
	
}).on('error', (e)=>{
	console.log("Error:",e);
});
// 브라우저 페이지 소스보기 형태와 같다 -> 한글 안나옴 , www 붙여야함