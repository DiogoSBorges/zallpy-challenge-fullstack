FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm run tsc

EXPOSE 3000

CMD  npx sequelize db:migrate --env=docker  &&  npx sequelize db:seed:undo:all --env=docker && npx sequelize db:seed:all --env=docker && npm start