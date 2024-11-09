FROM node:20-alpine

WORKDIR /app

COPY package* .

RUN npm i

COPY . .

EXPOSE 5173

CMD [ "npm" ,"run","dev","--host    "]