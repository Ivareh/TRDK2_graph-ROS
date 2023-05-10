## TRDK2_graph-ROS

A tool to get a better overview of Trondheim Municipality's internal IT systems

### Installation (Docker & GraphDB users)

Installation (Docker & GraphDB users)

As of now, only local development installation has been implemented.

Prerequisites:
* NodeJS
* Docker, supporting compose files version >= 3.9


With Docker:
Backend and API:
1. Make sure Docker is running
2. `cd backend`
3. Copy backend/ .env.example file and rename the copy to .env
4. `docker-compose -f docker-compose-backend.yml up`
5. Stop the docker-compose cluster and repeat step 4. Now the backend should be running at http://localhost:7200/ and the API at http://localhost:3001/


Frontend:
1. Make sure Docker is running
2.`cd frontend`
3. Copy frontend/ .env.example file and rename the copy to .env
4. `docker-compose -f docker-compose-frontend.yml up`
5. Stop the docker-compose cluster and repeat step 4. Now the frontend should be running at http://localhost:3000/ 

Without Docker: 
Backend and API:
1. ` cd backend `
2. ` npm install `
3. ` npm start `
4. Now the backend should be running at http://localhost:7200/ and the API at http://localhost:3001/

Frontend:
1. ` cd frontend `
2. ` npm install `
3. ` npm start `
4. Now the frontend should be running at http://localhost:3000/ 
