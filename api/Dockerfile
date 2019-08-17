FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
RUN npm run tsc


COPY ./build ./build

EXPOSE 3000

CMD npm start