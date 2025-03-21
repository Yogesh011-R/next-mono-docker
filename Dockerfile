FROM oven/bun:1 AS base
WORKDIR /app

COPY /packages ./packages
COPY ./bun.lock ./

COPY ./package.json ./
COPY ./turbo.json ./


COPY ./apps/web ./apps/web

RUN bun install
RUN bun run generate:db
RUN bun run build:web



FROM base AS runner
WORKDIR /app

# Don't run production as root




COPY --from=base /app/apps/web/.next/standalone ./
COPY --from=base /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=base /app/apps/web/public ./apps/web/public


EXPOSE 3000


CMD bun apps/web/server.js