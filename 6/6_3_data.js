
const somefunction = function () {
	console.log('data.js 의 somefunction 실행');
	console.log("1+1 = " , 1+1);
	
	
}


exports.main = ()=>{
	somefunction();
};

exports.list = [1,2,3];