FROM node:lts-alpine

WORKDIR /app

COPY ./server/ ./

RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 2031
