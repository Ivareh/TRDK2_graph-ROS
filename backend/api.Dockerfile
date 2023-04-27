FROM node:14
EXPOSE 3001
WORKDIR /app
COPY package.json .
COPY npm.lock .
RUN npm
COPY . .
ENTRYPOINT [ "npm", "start" ]