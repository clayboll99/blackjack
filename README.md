# Blackjack

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Development Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development dependencies using docker:
```bash
# Do this first
cp sample.env .env
# Make sure to update the .env file as needed

docker compose up -d
```

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```
Navigate to `http://localhost:3000` and select the "Login" button. You will be redirected to your local keycloak instance to login. Use the username 'test' and password 'changeme' to login.


## Production

The app automatically deploys to Vercel. Visit [https://blackjack-nu-two.vercel.app/](https://blackjack-nu-two.vercel.app/)

Note: you will need to use a Github account to login and the account must have a publicly available email.
