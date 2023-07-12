FROM node:16-alpine as builder

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
# RUN yarn migration:run
# RUN yarn db:seed
RUN yarn build

FROM node:16-alpine

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --production
COPY .env /app/
COPY --from=builder /app/dist /app/dist
ENV REDIS_HOST=redis

CMD ["node", "dist/main.js"]