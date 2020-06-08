var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'nodejs',
	password : '1234',
	database : 'test'
});

var val_name1 = 'yb';

var str = mysql.format(	'SELECT * FROM testTable where name = '+mysql.escape( val_name1 ));
					   
connection.connect((err)=>{
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

connection.query( 'UPDATE testTable set name = "yb2" WHERE password = "yb"', (err, result)=>{
	//connection.release();

	if (err){
		console.error( err );
		return;
	};

	console.log('result: ' , result );
});
connection.end();   //-> 결과값이 나오고 종료
