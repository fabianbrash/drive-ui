FROM node:14.4.0-alpine3.11

LABEL maintainer="Fabian Brash"

WORKDIR /opt/demo1
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

