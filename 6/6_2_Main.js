var user = require('./6_2_user.js');
var board = require('./6_2_board.js');

var ServerFunction = ()=>{
	if( condition == 'user' ){
		user.main();
	}else if( condition == 'board' ){
		board.main();
	}
};

ServerFunction.createServer();