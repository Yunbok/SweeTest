const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);


//내장모듈의 경우 프로세스를 멈추지않고 계속 실행된다. -> 예외처리가 다 되어있다.