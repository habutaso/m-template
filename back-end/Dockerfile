FROM node:lts-slim

RUN npm i -g pnpm

WORKDIR /app
COPY . /app/

RUN pnpm i

EXPOSE 3000
CMD ["pnpm run start"]