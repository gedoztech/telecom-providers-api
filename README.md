GraphQL API consuming 2 REST APIs and normalizing data into one schema.

# Technologies

- Node.js
- TypeScript 
- GraphQL
- Apollo Server
- Alpine
- Docker Engine
- Docker Compose

# Installation

Clone from repo:
```sh
git clone https://github.com/johnny00joe/telecom-providers-api.git
```

Access project root folder:
```sh
cd telecom-providers-api
```

Create .env file:
```sh
cp .env.example .env
```

Set API URIs with the correct values:
```sh
OI_API_URI=put_here_the_uri
```
```sh
TIM_API_URI=put_here_the_uri
```

Build services and run the containers:
```sh
make build
```

# Other commands

In background, builds, (re)creates, starts, and attaches to containers for a service:

```sh
make up
```

Stops containers and removes containers, networks, volumes, and images created by `up`:

```sh
make down
```

Stops running containers without removing them:

```sh
make stop
```

Starts existing containers for a service:

```sh
make start
```

Restarts all stopped and running services:

```sh
make restart
```

# Endpoints outside Docker

GraphQL Endpoint (Apollo Server):

```
http://localhost:5000
```






