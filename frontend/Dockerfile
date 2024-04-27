FROM node:alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i --legacy-peer-deps

COPY . /app/

CMD ["npm", "run", "start"]
