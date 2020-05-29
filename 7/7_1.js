const exec = require('child_process').exec;
exec('cp file1.js file2.js');



/*


root@goorm:/workspace/SweeTest/7(master)# ll
합계 12
drwxrwxr-x 2 root root 4096  5월 24 01:41 ./
drwxr-xr-x 8 root root 4096  5월 24 01:39 ../
-rwxrwxr-- 1 root root   73  5월 24 01:41 7_1.js*
-rw-rw-r-- 1 root root    0  5월 24 01:41 file1.js
root@goorm:/workspace/SweeTest/7(master)# node 7_1.js
root@goorm:/workspace/SweeTest/7(master)# ll
합계 12
drwxrwxr-x 2 root root 4096  5월 24 01:41 ./
drwxr-xr-x 8 root root 4096  5월 24 01:39 ../
-rwxrwxr-- 1 root root   73  5월 24 01:41 7_1.js*
-rw-rw-r-- 1 root root    0  5월 24 01:41 file1.js
-rw-rw-r-- 1 root root    0  5월 24 01:41 file2.js
root@goorm:/workspace/SweeTest/7(master)#

*/

//https://nodejs.org/api/child_process.html
//