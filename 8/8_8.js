var redis = require("redis"),
   client = redis.createClient( 6379 , '127.0.0.1' );
   client.auth("1234");
client.on("subscribe", (channel, message)=>{
   console.log("client subscribe channel " + channel );
});
client.on("message", (channel, message)=>{
   console.log("client message channel " + channel + ": " + message);
});
client.subscribe("pushnoti");