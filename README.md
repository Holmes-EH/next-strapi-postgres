# Next13 - Strapi v4 - PostgreSQL starter

Start by running

```bash
yarn install
```

Then duplicate and rename `apps/cms/.env.example` to `.env` and fill every value

Before setup, you'll need to start and wait for database image

```bash
docker compose -f docker-compose.dev.yml up -d --build --wait
```

Before running for dev envioronment, you'll need to lauch the initial setup for strapi :

```bash
cd apps/cms && yarn start
```

No return to project root and fire everything up with

```bash
turbo dev
```
