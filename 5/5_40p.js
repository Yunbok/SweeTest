const fs = require('fs');

//파일 삭제 예제
/*
fs.unlink('/tmp/hello', (err)=> {
	if(err) throw err;
	console.log("successfully deleted /tmp/hello");
});
*/


//파일 생성예제
/*
fs.writeFile('test.txt', 'hello World2', (err) => {
	if(err) throw err;
	console.log('File write completed');
	
});
*/

//파일 작성 기능
/*
fs.open ('test.txt' , 'w' , (err,fd)=> {
	//실패시 err , 성공시 fd 리턴
	if(err) throw err;
	fs.write(fd, "hello world" ,(err, written)=>{
		if(err ) throw err;
		console.log(written + " bytes Written");
		
		fs.close( fd , ()=>{
			console.log('Done');
		});
		
	})
});
*/

//파일 업데이트 기능

// 위의 예제는 w -> 새로쓰기 기존내용지워짐
// 아래 예제는 a -> 기존내용에 4번위치에 'update'넣기
// 실행해봤는데 계속 뒤에 붙음
/*
fs.open ('test.txt' , 'a' , (err,fd)=> {
	//실패시 err , 성공시 fd 리턴
	if(err) throw err;
	fs.write(fd, "Update" , 4 ,(err, written)=>{
		//성공하면 입력한 바이트수 리턴
		if(err ) throw err;
		console.log(written + " bytes Written");
		
		fs.close( fd , ()=>{
			console.log('Done');
		});
	});
});
*/
const fd = fs.createWriteStream('data.txt' , {flags:'w'});

fd.on('open',()=>{
	fd.write("Data");
	
	fd.end(()=>{
		
		console.log("END");
		
	});	
});