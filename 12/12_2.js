
const fs = require('fs');

var text2 = fs.readFileSync('temp.txt', (err, data) => {
	if(err){
		console.error("에러로 인해 파일을 열 수 없습니다.\n에러는 다음과 같습니다.");
		console.error( err );
		return;
	}
	console.log(data);
	
});

console.log(text2 + " 11111");

console.log(text2 + "1112321321");
// fs.unlink('temp.txt', (err) => {
// 	if(err){
// 		console.error("에러로 인해 파일을 삭제할 수 없습니다.\n에러는 다음과 같습니다.");
// 		console.error( err );
// 		return;
// 	}
// 	console.log('파일이 성공적으로 삭제되었습니다.');
// });