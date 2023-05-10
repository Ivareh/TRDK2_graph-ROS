## TRDK2_graph-ROS

This is a tool to get a better overview of Trondheim Municipality's internal IT systems. The tool was created within a project called TRDK2_graph-ROS.

### Project description

In large organisations, keeping track of internal IT systems and their connections can be a daunting
task. It is not uncommon for these systems to produce vast amounts of data, which can be difficult
to interpret and analyse. This can lead to missing or outdated information, and errors in the data
that describes these systems.

To address these challenges, the project TRDK2 graph-ROS aimed to develop a product that
can visualise data and provide a better understanding of how the internal systems of Trondheim
Municipality are connected. By creating a visual representation of the data using GraphDB, 
it would be easier to identify patterns and trends, as well as
potential areas for improvement. The goal was to help improve the efficiency and effectiveness of
work inside the organisation

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



Here is a link to our report for this project: https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:ac99afb6-b049-4a65-83b1-396c63a9d430
