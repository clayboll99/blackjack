# Blackjack

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Development Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# Do this first
cp sample.env .env
# Make sure to update the .env file as needed

# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Running the Entire Application
Before running make sure to have a `.env` file

```bash
# Run everything in docker
docker compose up -d
```