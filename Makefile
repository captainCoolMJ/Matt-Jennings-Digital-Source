start: 
	docker-compose up -d 

stop: 
	docker-compose down

kill: 
	docker-compose down --rmi all

ssh:
	docker-compose exec app bash