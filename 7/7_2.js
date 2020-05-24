const exec = require('child_process').exec;
exec('ls -al', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
});


/*

root@goorm:/workspace/SweeTest/7(master)# node 7_2.js
exec error: Error: Command failed: ls --al							// 오류시 출력
ls: '--al' 옵션은 모호한 옵션입니다. 가능한 옵션은: '--all' '--almost-all'
Try 'ls --help' for more information.

root@goorm:/workspace/SweeTest/7(master)# ls --al
ls: '--al' 옵션은 모호한 옵션입니다. 가능한 옵션은: '--all' '--almost-all'
Try 'ls --help' for more information.

*/


/* 정상 작동시 출력

root@goorm:/workspace/SweeTest/7(master)# node 7_2.js
stdout: 합계 36
drwxrwxr-x 2 root root  4096  5월 24 01:46 .
drwxr-xr-x 8 root root  4096  5월 24 01:39 ..
-rw-rw-r-- 1 root root 17480  5월 24 01:42 7-1.PNG
-rwxrwxr-- 1 root root    73  5월 24 01:41 7_1.js
-rwxrwxr-- 1 root root   673  5월 24 01:49 7_2.js
-rw-rw-r-- 1 root root     0  5월 24 01:41 file1.js
-rw-rw-r-- 1 root root     0  5월 24 01:41 file2.js

stderr:

*/