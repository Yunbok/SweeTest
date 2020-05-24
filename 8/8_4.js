var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'nodejs',
	password : '1234',
	database : 'test'
});
connection.connect((err)=>{
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});
// connect 가 끝나기전까진 query 가 실행되지않음
connection.query('SELECT * from testTable where 1 = ?',[ 1 ],(err, rows, fields)=>{
	if (err) throw err;
	
	console.log('The solution is: ', rows);
	
	// console.log(fields);
	
	for( let i = 0; i < rows.length ; i++){
		console.log("Row: " , rows[i]);
	}
});
// query 가 끝나기전까진 end 가 실행되지않음
connection.end();   //-> 결과값이 나오고 종료


/* 

root@goorm:/workspace/SweeTest/8(master)# node 8_4.js
connected as id 13
The solution is:  [ RowDataPacket { name: 'yb', password: '1234' },
  RowDataPacket { name: 'bb', password: '1111' } ]
[ FieldPacket {
    catalog: 'def',
    db: 'test',
    table: 'testTable',
    orgTable: 'testTable',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 150,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'test',
    table: 'testTable',
    orgTable: 'testTable',
    name: 'password',
    orgName: 'password',
    charsetNr: 33,
    length: 150,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true } ]
Row:  RowDataPacket { name: 'yb', password: '1234' }
Row:  RowDataPacket { name: 'bb', password: '1111' }

*/