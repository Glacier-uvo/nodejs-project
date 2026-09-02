# Node.js Notes API

A simple REST API built with Node.js, Express, and MongoDB. The application is containerized using Docker.

## Technologies

* Node.js
* Express.js
* MongoDB
* Docker
* Git & GitHub

## Project Structure

```text
nodejs-project/
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## API Endpoints

| Method | Endpoint | Description                   |
| ------ | -------- | ----------------------------- |
| GET    | `/`      | Check that the API is running |
| GET    | `/notes` | Get all notes                 |
| POST   | `/notes` | Create a new note             |

## Running Locally

Create package.json:

npm init -y

Install the dependencies:

```bash
npm install express mongodb
```

Start the application:

```bash
node server.js
```

The API will run on the configured port.

## Running with Docker

Build the Docker image:

```bash
docker build -t notes-api .
```

Run the container:

```bash
docker run -p 3000:3000 notes-api
```

Replace the ports if your application uses a different port.

## MongoDB

The application connects to MongoDB using a MongoDB connection string.

When running MongoDB and the Node.js application in separate Docker containers, the containers should be connected to the same Docker network.

Example:

(create-docker-network)
docker network create notes-network
```

(MongoDB container service)

```bash
docker run -d --name mongodb --network notes-network mongo
```

The application can then connect to MongoDB using the MongoDB container name as the hostname:

```text
mongodb://mongodb:27017/notes
```

## Testing the API

Once the application is running, you can test the API using a browser, Postman, or another API client.

Example:

```text
GET http://localhost:3000/
```

You should receive a response confirming that the API is running.

## What I Learned

This project helped me practice:

* Building a basic REST API with Node.js and Express
* Connecting an application to MongoDB
* Creating and running Docker containers
* Connecting multiple containers using a Docker network
* Using Git for version control
* Pushing a project to GitHub

## Next Steps

Planned improvements:

* Terraform infrastructure
* CI/CD with GitHub Actions
* AWS deployment
* Kubernetes
* Monitoring with Prometheus and Grafana
