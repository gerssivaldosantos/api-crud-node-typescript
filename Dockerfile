FROM node:16

WORKDIR /usr/app

RUN rm -rf node_modules/

COPY ./package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]