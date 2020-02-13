FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY .env /usr/src/app/

COPY . /usr/src/app/

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "start"]
