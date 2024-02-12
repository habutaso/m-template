FROM node:lts-slim as base
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"

RUN apt-get update -y \
  && apt-get install -y openssl

RUN corepack enable

WORKDIR /app
COPY . /app/

RUN which pnpm

FROM base as develop
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i

RUN npx prisma db pull

EXPOSE 3000
CMD ["pnpm", "run", "start"]