exec_postgres:
	sudo docker exec -it postgres bash

psql:
	sudo docker exec -it postgres psql -U postgres -d node_ddd

psql_info:
	sudo docker exec -it postgres  psql -U postgres -d node_ddd \
	-c "\l" -c "\d users" \
	-c "SELECT * FROM  roles;" \
	-c "SELECT * FROM  users;" \
	-c "SELECT * FROM  points;" \
	-c "SELECT * FROM  points_users;" \
	-c "SELECT * FROM  promotions;" \
	-c "SELECT * FROM  promotions_users;"


exec_web:
	sudo docker exec -it web sh
	
build_dev:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
	
dev:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

down:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

build_prod:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
	
prod:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

rmi:
	docker stop $(docker ps -a -q)
	docker rm $(docker ps -a -q)