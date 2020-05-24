var mysql  = require('mysql')


var connection  = mysql.createConnection({
	host     : 'localhost',
	user     : 'nodejs',
	password : '1234',
	database : 'test'
});

var pool  = mysql.createPool({
	host     : 'localhost',
	user     : 'nodejs',
	password : '1234',
	database : 'test',
	connectionLimit : 5
});

// pool.getConnection((err, connection)=>{
// 	pool.query( 'SELECT * FROM testTable',(err, rows)=>{
// 		// 뭔가 데이터를 이용한 이러 저러한 작업들..

// 		connection.release();
// 		// 현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업이 불가능.
// 	});
// });
connection.connect((err, connection)=>{
		if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
	connection.query( 'SELECT * FROM testTable',(err, rows)=>{
			// 뭔가 데이터를 이용한 이러 저러한 작업들..
			console.log( new Date() );

			setTimeout(()=>{
				connection.end();
			},3000);

			// 현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업이 불가능.
		});
  if (connection){
    connection.emd();
    return;
  }
});
/*
for( var i = 0 ; i < 6 ; i++ ){
	pool.getConnection((err, connection)=>{
		if( err ){
			console.log("ERROR:",err.stack );
			return;
		}


     console.log('connected as id ' + connection.threadId);
		connection.query( 'SELECT * FROM testTable',(err, rows)=>{
			// 뭔가 데이터를 이용한 이러 저러한 작업들..
			console.log( new Date() );

			setTimeout(()=>{
				connection.release();
			},3000);

			// 현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업이 불가능.
		});
	});
}
*/
	