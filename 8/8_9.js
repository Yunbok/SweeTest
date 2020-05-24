var redis = require("redis"),
   client = redis.createClient( 6379 , '127.0.0.1' );
   client.auth("1234");
client.publish("pushnoti", "I am sending my last message.");