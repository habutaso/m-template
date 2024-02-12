FROM node:lts-slim as base
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . /app/

RUN which pnpm


FROM base as develop
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i
EXPOSE 3333
CMD ["pnpm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3333"]