FROM node:slim
ENV NODE_ENV development

WORKDIR /express

COPY . .
RUN npm i

CMD ["node", "server.js"]

EXPOSE 3001