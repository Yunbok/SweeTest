global.temp = "a";
console.log(1, temp);
const file_load = require("./5_29p_subfile2.js");
console.log(2, temp);

/*
1 'a'
3 'a'
4 'b'
2 'b'
*/