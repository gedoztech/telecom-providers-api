install:
	docker-compose -f docker-compose-install.yml build --no-cache --force-rm
	@make up-install
	docker-compose exec api yarn install
	@make down-install

up-install:
	docker-compose -f docker-compose-install.yml up -d

down-install:
	docker-compose -f docker-compose-install.yml down

build-dev:
	docker-compose build --no-cache --force-rm

up-dev-background:
	docker-compose up -d

up-dev-foreground:
	docker-compose up

down-dev:
	docker-compose down --remove-orphans

stop-dev:
	docker-compose stop

start-dev:
	docker-compose start

restart-dev:
	docker-compose restart