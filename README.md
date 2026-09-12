# Node.js Notes API

A simple REST API built with Node.js, Express, and MongoDB. The application is containerized using Docker.

## Technologies

* Node.js
* Express.js
* MongoDB
* Docker
* Git & GitHub

## Project Structure
nodejs-project/
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md

## API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| GET    | `/`          | Check that the API is running |
| GET    | `/notes`     | Get all notes                 |
| GET    | `/notes/:id` | Get a specific note           |
| POST   | `/notes`     | Create a new note             |
| PUT    | `/notes/:id` | Update a specific note        |
| DELETE | `/notes/:id` | Delete a specific note        |

## Running Locally
Create package.json:
npm init -y


Install the dependencies:
npm install express mongodb


Start the application:
node server.js

The application connects to MongoDB asynchronously before starting the Express server.

The API will run on the configured port.

## Running with Docker

Build the Docker image:
docker build -t notes-api .

Run the container:
docker run -p 3000:3000 notes-api

Replace the ports if your application uses a different port.

## MongoDB
The application connects to MongoDB using a MongoDB connection string.

When running MongoDB and the Node.js application in separate Docker containers, the containers should be connected to the same Docker network.

Create a Docker network:
docker network create notes-network

Run the MongoDB container:
docker run -d --name mongodb --network notes-network mongo

The application can then connect to MongoDB using the MongoDB container name as the hostname:
mongodb://mongodb:27017/notes

## Application Startup Sequence

The application uses an asynchronous startup sequence.

MongoDB is connected to before the Express server starts listening for requests.

Application starts
       ↓
Connect to MongoDB
       ↓
MongoDB connection succeeds
       ↓
Start Express server
       ↓
API is ready to receive requests


This ensures that the application has an active database connection before the server begins accepting requests.
## Testing the API

Once the application is running, you can test the API using a browser, Postman, or another API client.

Check that the API is running:
GET http://localhost:3000/

Get all notes:
GET http://localhost:3000/notes

Get a specific note:
GET http://localhost:3000/notes/:id


Create a note:
POST http://localhost:3000/notes

Update a note:
PUT http://localhost:3000/notes/:id


Delete a note:
DELETE http://localhost:3000/notes/:id

You should receive the appropriate response for each request.

## What I Learned

This project helped me practice:

* Building a REST API with Node.js and Express
* Implementing GET, POST, PUT, and DELETE endpoints
* Connecting an application to MongoDB
* Using asynchronous application startup
* Creating and running Docker containers
* Connecting multiple containers using a Docker network
* Using Docker container names for service discovery
* Using Git for version control
* Pushing a project to GitHub

## Next Steps

Planned improvements:

* Terraform infrastructure
* CI/CD with GitHub Actions
* AWS deployment
* Kubernetes
* Monitoring with Prometheus and Grafana
