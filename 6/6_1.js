const qs = require('qs');  // 하나의 변수 qs 가 클래스처럼 사용됨

var obj = qs.parse('a=1&b=2');

console.log(obj);

console.log( JSON.stringify( obj ) );  // URL 에서도 사용가능한 쿼리 스트링으로 변경

var str = qs.stringify( obj );
console.log( str );

var str = qs.stringify( JSON.parse('{"a":"1","b":"2"}') );  // 문자열을 넣을때는 JSON.parse 를사용
console.log( str );


/*
https://www.npmjs.com/package/qs
qs 는 보안이 추가 된 쿼리 문자열 구문 분석 및 문자열 화 라이브러리

*/