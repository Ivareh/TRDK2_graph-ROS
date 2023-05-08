FROM node:16
ENV DISABLE_ESLINT_PLUGIN=true
WORKDIR /app
COPY package*.json ./

COPY . ./
RUN npm install
CMD [ "npm", "start" ]