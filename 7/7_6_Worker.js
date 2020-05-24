setInterval(()=>{
	process.send('worker2');
},1000);

setTimeout(()=>{
	error_function();
},5000);