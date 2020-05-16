//console.log 활용 로그에 색을입힐수있다.
console.log('ANSI 문법 활용	');
console.log("\033[36m" + new Date()+ "\033[0m:");


console.log('5초마다 현재시간 출력');

// 형태  setInterval(() => { } , 시간 )
setInterval(() =>{
	console.log("현재시간 " , new Date());
}, 5* 1000);

