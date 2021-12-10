build:
	docker-compose build --no-cache --force-rm
	@make install
	docker-compose exec api yarn install
	@make down
	@make up

install:
	docker-compose up -d -f docker-compose-install.yml

up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans

stop:
	docker-compose stop

start:
	docker-compose start

restart:
	docker-compose restart