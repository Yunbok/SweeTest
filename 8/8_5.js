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

connection.query(str,(err, rows, fields)=>{
	if (err) throw err;
	
	console.log('The solution is: ', rows);
		
	for( let i = 0; i < rows.length ; i++){
		console.log("Row: " , rows[i]);
	}
});

connection.end();   //-> 결과값이 나오고 종료

