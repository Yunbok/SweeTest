//module.exports 를 사용하면 해당 js파일을 하나의 함수 혹은 오브젝트로 인지합니다.

let list = [1,2,3];

module.exports = ()=>{
	for( let i = 0 ; i < list.length ; i++ ){
		list[ i ] *= 2;
	}
	return list;
};