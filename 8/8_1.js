//DB커넥션 예제 

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
connection.query('SELECT * from testTable',(err, rows, fields)=>{
	if (err) throw err;
	console.log('The solution is: ', rows[0].solution);
	console.log('The solution is: ', rows);
});
// query 가 끝나기전까진 end 가 실행되지않음
connection.end();   //-> 결과값이 나오고 종료

//connection.destroy();  //-> 그냥 종료됨




//우분투 mysql서버 설치
//https://dejavuqa.tistory.com/317



/*   실습중 문제점

root@goorm:/workspace/SweeTest/8(master)# node 8_1.js
llerror connecting: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    at Handshake.Sequence._packetToError (/workspace/SweeTest/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Handshake.ErrorPacket (/workspace/SweeTest/node_modules/mysql/lib/protocol/sequences/Handshake.js:123:18)
    at Protocol._parsePacket (/workspace/SweeTest/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/workspace/SweeTest/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/workspace/SweeTest/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/workspace/SweeTest/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/workspace/SweeTest/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/workspace/SweeTest/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (events.js:198:13)
    at addChunk (_stream_readable.js:288:12)
    --------------------
    at Protocol._enqueue (/workspace/SweeTest/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Protocol.handshake (/workspace/SweeTest/node_modules/mysql/lib/protocol/Protocol.js:51:23)
    at Connection.connect (/workspace/SweeTest/node_modules/mysql/lib/Connection.js:116:18)
    at Object.<anonymous> (/workspace/SweeTest/8/8_1.js:10:12)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
/workspace/SweeTest/8/8_1.js:19
        if (err) throw err;
		
*/


//CREATE USER 'nodejs'@'%' IDENTIFIED BY '1234';  모든 아이피에서 접속가능한 새로운 유저 생성

//GRANT ALL PRIVILEGES ON test.* TO 'nodejs'@'%';   test 데이타베이스에 관한 모든 권한 등록 



// FLUSH PRIVILEGES; DB에 반영

/*  결과 

root@goorm:/workspace/SweeTest/8(master)# node 8_1.js
connected as id 9
The solution is:  undefined
root@goorm:/workspace/SweeTest/8(master)# node 8_1.js
connected as id 10
The solution is:  undefined
The solution is:  [ RowDataPacket { name: 'yb', password: '1234' } ]
root@goorm:/workspace/SweeTest/8(master)#



*/