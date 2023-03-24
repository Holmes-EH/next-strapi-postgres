# Next13 - Strapi v4 - PostgreSQL starter

A Turborepo monorepo. Strapi and NextJs apps are in `apps` folder. Eslint, typescript config are in `packages`.  
Start by running

```bash
yarn install
```

Then duplicate and rename `apps/cms/.env.example` to `.env` and fill in every value

Before setup, you'll need to start and wait for database docker container.

```bash
docker compose -f docker-compose.dev.yml up -d --build --wait
```

Before running for dev environment, you'll need to launch the initial setup for strapi :

```bash
cd apps/cms && yarn start
```

Return to project root and fire everything up with

```bash
turbo dev
```
