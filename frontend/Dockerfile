FROM node:16
ENV DISABLE_ESLINT_PLUGIN=true
WORKDIR /app
COPY .. .
RUN npm --production

FROM node:16
COPY --from=0 /app .
RUN npm install --global http-server
RUN npm run build
CMD [ "http-server", "build", "-p 80" ]