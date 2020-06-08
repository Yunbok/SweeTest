var mysql  = require('mysql')

var pool  = mysql.createPool({
	host     : 'localhost',
	user     : 'nodejs',
	password : '1234',
	database : 'test',
	connectionLimit : 5
});

pool.getConnection((err, connection)=>{
	pool.query( 'SELECT * FROM testTable',(err, rows)=>{
		// 뭔가 데이터를 이용한 이러 저러한 작업들..
		console.log(err);
		console.log(rows);
		connection.release();
		// 현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업이 불가능.
	});
});
/*

var pool  = mysql.createPool({
	host     : 'localhost',
	user     : 'userid',
	password : 'dbpassword',
	database : 'dbname',
	connectionLimit : 5
});

pool.getConnection((err, connection)=>{
	pool.query( 'SELECT something FROM sometable',(err, rows)=>{
		// 뭔가 데이터를 이용한 이러 저러한 작업들..

		connection.release();
		// 현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업이 불가능.
	});
});
*/