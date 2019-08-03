DOCKER_COMPOSE_FILE = ./.vm/docker-compose.dev.yml

# Client related
DOCKER_FILE_CLIENT = ./.vm/Dockerfile
REPOSITORY_CLIENT = captaincool/mjd
TAG_CLIENT = latest
SERVICE_CLIENT = client

environment-clean:
	docker-compose -f ${DOCKER_COMPOSE_FILE} down --rmi all

start:
	docker-compose -f ${DOCKER_COMPOSE_FILE} up -d ${SERVICES_CLIENT}

stop:
	docker-compose -f ${DOCKER_COMPOSE_FILE} stop ${SERVICES_CLIENT}

ssh:
	docker-compose -f ${DOCKER_COMPOSE_FILE} exec ${SERVICE_CLIENT} bash

build-image-client:
	docker build -t ${REPOSITORY_CLIENT}:${TAG_CLIENT} -f ${DOCKER_FILE_CLIENT} ./

push-image-client:
	docker push ${REPOSITORY_CLIENT}:${TAG_CLIENT}
