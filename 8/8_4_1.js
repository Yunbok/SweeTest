var mysql      = require('mysql');
var connection = mysql.createConnection({
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

connection.connect((err)=>{
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});


//var str = mysql.format( 'SELECT col1 , col2 , col3 FROM mytable where col1 = '+mysql.escape( val_name1 )+' and col2 = '+mysql.escape( val_name2 )+' ); 



/*

connection.query( 'SELECT * FROM testTable where name = ?' , [ 'yb' ], (err, rows , fields ) => {
	connection.release();
	
	if( err ){
		// 에러가 발생할 경우 에러를 표시하고, 종료를 한다.
		console.error( err );
		return;
	}

	// 받은 결과값의 필드 리스트를 보여준다.
	console.log( fields );

	// 결과물을 출력한다.
	for( var i = 0 ; i < rows.length ; i++ ){
		console.log( "Row: " , rows[ i ] );
	}
});
*/


	pool.getConnection((err, connection)=>{
		if( err ){
			console.log("ERROR:",err.stack );
			return;
		}
		connection.query( 'SELECT * FROM testTable where name = ?' , [ 'yb' ], (err, rows , fields ) => {
			connection.release();

			if( err ){
				// 에러가 발생할 경우 에러를 표시하고, 종료를 한다.
				console.error( err );
				return;
			}

			// 받은 결과값의 필드 리스트를 보여준다.
			console.log( fields );

			// 결과물을 출력한다.
			for( var i = 0 ; i < rows.length ; i++ ){
				console.log( "Row: " , rows[ i ] );
			}
		});
	});