FROM node:16-alpine as builder

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
COPY . /app
RUN yarn build

FROM node:16-alpine

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile --production
COPY .env /app/
COPY --from=builder /app/dist /app/dist
ENV REDIS_HOST=host.docker.internal

CMD ["node", "dist/main.js"]