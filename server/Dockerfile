FROM node:lts-alpine3.17

WORKDIR /app

COPY ./server/ ./

RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 2031
