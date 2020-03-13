FROM node:11.13.0-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git
RUN apk add python
RUN apk add g++
RUN apk add make

COPY . /app
RUN npm install

RUN npm run build

EXPOSE 80

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

CMD [ "npm", "start" ]