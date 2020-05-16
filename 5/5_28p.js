//파일시스템 사용

const fileSystem = require( 'fs');

// unlink - 파일삭제 메소드
fileSystem.unlink('/tmp/hello' , (err)=>{
	if( err ){
		throw err;
		return;
	}
	
	console.log ( 'delete success');
});

