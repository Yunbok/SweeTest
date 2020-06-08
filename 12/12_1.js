try {
	wrong_function();
	
}catch(e){
	console.error("에러가 발생하였습니다.");
	console.error(e.message);
}finally{
	console.log('function ended');
}

