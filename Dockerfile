FROM node:20-alpine

WORKDIR /usr/src/app

COPY nodeClient ./nodeClient

RUN cd nodeClient && npm install

CMD ["sh", "-c", "cd nodeClient && node index.js"]