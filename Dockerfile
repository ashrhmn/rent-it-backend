FROM node:16 as builder

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
COPY . /app
RUN yarn build

FROM node:16-alpine

RUN yarn global add prisma prisma-nestjs-graphql
WORKDIR /app
COPY package.json yarn.lock /app/
# COPY .env /app/
RUN yarn install --frozen-lockfile --production
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/src/prisma/schema.prisma /app/src/prisma/schema.prisma
RUN prisma generate

ENV REDIS_HOST=host.docker.internal
ENV DATABASE_URL="postgresql://swisscheese:empty-stage@host.docker.internal:5432/rent?schema=public"

CMD ["node", "dist/main.js"]