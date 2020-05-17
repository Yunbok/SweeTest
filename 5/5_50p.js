const https = require('https');

let CrawData = [];

https.get('https://nodejs.org/dist/latest-v5.x/docs/api/index.json',(res)=>{
	let body = '';
	res.on('data',(d)=> {
	body += d;	
	});
	res.on('end',()=>{
		let index_data = JSON.parse(body).desc;
		
		//반복문 돌면서 페이지 데이터가져옴
		for(let i =0; i<index_data.length; i++){
			if(index_data[i].type == 'text'){
				
				/* (정규 표션식 사용허면 좀더 편리하다는 내용 주석)*/
				
				let str = index_data[i].text;
				str = str.substr(str.indexOf("[") +1 );
				let temp_idx = str.indexOf("]");
				let title = str.substr( 0, temp_idx);
				
				str = str.substr(temp_idx + 1);
				let link = str.slice(1, -1);
				
				CrawData.push({
					'title': title,
					'link':link
				});
				
				
			}
		}
		
		console.log(CrawData  );
		
	});
}).on('error', (e)=>{
	console.log("Error: ",e);
});



/*
[ { title: 'About these Docs', link: 'documentation.html' },
  { title: 'Synopsis', link: 'synopsis.html' },
  { title: 'Assertion Testing', link: 'assert.html' },
  { title: 'Buffer', link: 'buffer.html' },
  { title: 'C/C++ Addons', link: 'addons.html' },
  { title: 'Child Processes', link: 'child_process.html' },
  { title: 'Cluster', link: 'cluster.html' },
  { title: 'Command Line Options', link: 'cli.html' },
  { title: 'Console', link: 'console.html' },
  { title: 'Crypto', link: 'crypto.html' },
  { title: 'Debugger', link: 'debugger.html' },
  { title: 'DNS', link: 'dns.html' },
  { title: 'Domain', link: 'domain.html' },
  { title: 'Errors', link: 'errors.html' },
  { title: 'Events', link: 'events.html' },
  { title: 'File System', link: 'fs.html' },
  { title: 'Globals', link: 'globals.html' },
  { title: 'HTTP', link: 'http.html' },
  { title: 'HTTPS', link: 'https.html' },
  { title: 'Modules', link: 'modules.html' },
  { title: 'Net', link: 'net.html' },
  { title: 'OS', link: 'os.html' },
  { title: 'Path', link: 'path.html' },
  { title: 'Process', link: 'process.html' },
  { title: 'Punycode', link: 'punycode.html' },
  { title: 'Query Strings', link: 'querystring.html' },
  { title: 'Readline', link: 'readline.html' },
  { title: 'REPL', link: 'repl.html' },
  { title: 'Stream', link: 'stream.html' },
  { title: 'String Decoder', link: 'string_decoder.html' },
  { title: 'Timers', link: 'timers.html' },
  { title: 'TLS/SSL', link: 'tls.html' },
  { title: 'TTY', link: 'tty.html' },
  { title: 'UDP/Datagram', link: 'dgram.html' },
  { title: 'URL', link: 'url.html' },
  { title: 'Utilities', link: 'util.html' },
  { title: 'V8', link: 'v8.html' },
  { title: 'VM', link: 'vm.html' },
  { title: 'ZLIB', link: 'zlib.html' } ]
  */




