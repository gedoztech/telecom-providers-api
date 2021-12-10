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

Install dependencies:
```sh
make install
```

Build service for development:
```sh
make build-dev
```

Run the container in foreground for development (with nodemon monitor):
```sh
make up-dev-foreground
```

# Other commands (for development)

Run the container in background:

```sh
make up-dev-background
```

Stops containers and removes containers, networks, volumes, and images created by `up`:

```sh
make down-dev
```

Stops running containers without removing them:

```sh
make stop-dev
```

Starts existing containers for a service:

```sh
make start-dev
```

Restarts all stopped and running services:

```sh
make restart-dev
```

# Endpoints outside Docker

GraphQL Endpoint (Apollo Server):

```
http://localhost:5000
```






