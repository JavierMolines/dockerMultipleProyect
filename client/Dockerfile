FROM node:lts-alpine AS builder

WORKDIR /app

COPY ./client/ ./
RUN npm install
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/ ./

EXPOSE 80