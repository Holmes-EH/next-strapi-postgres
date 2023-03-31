# Next13 - Strapi v4 - PostgreSQL starter

A Turborepo monorepo. Strapi and NextJs apps are in `apps` folder. Eslint, typescript config are in `packages`.  
Start by running

```bash
yarn install
```

Then duplicate and rename `apps/strapi/.env.example` to `.env` and fill in every value

Before setup, you'll need to start and wait for database docker container.

```bash
docker compose -f docker-compose.dev.yml up -d --build --wait
```

If you haven't already, you'll need to install turbo globally.

```bash
yarn global add turbo
```

Then you can run the following command to start the development server.

```bash
turbo dev
```
