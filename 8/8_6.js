// noSQL 설정

/*

//최초 설치후 책 그대로 따라하면 접속 불가
root@goorm:/workspace/SweeTest/8(master)# redis-cli
Could not connect to Redis at 127.0.0.1:6379: Connection refused
Could not connect to Redis at 127.0.0.1:6379: Connection refused
not connected>
not connected>


//redis 설정 변경해주어야함

root@goorm:/workspace/SweeTest/8(master)# vi /etc/redis/redis.conf
root@goorm:/workspace/SweeTest/8(master)# service redis-server restart
Stopping redis-server: redis-server.
Starting redis-server: redis-server.
root@goorm:/workspace/SweeTest/8(master)# redis-cli
127.0.0.1:6379> ping
(error) NOAUTH Authentication required.
127.0.0.1:6379> auth 1234
OK
127.0.0.1:6379> ping
PONG
127.0.0.1:6379>

	*/

/*  결과

127.0.0.1:6379> SET mykey "hello"
OK
127.0.0.1:6379> GET mykey
"hello"
127.0.0.1:6379>
	
	*/
