FROM node:lts-slim

RUN npm i -g pnpm

WORKDIR /app
COPY . /app/

RUN pnpm i

EXPOSE 3333
CMD ["pnpm run dev -- -p 3333"]