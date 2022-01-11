FROM node:alpine as builder

WORKDIR /tmp/app

COPY ./package.json ./yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:alpine

WORKDIR /tmp/app

COPY ./package.json ./yarn.lock ./

RUN yarn --production

COPY --from=builder ./tmp/app/dist ./dist

EXPOSE 5000

CMD ["yarn", "run", "start"]

