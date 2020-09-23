This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

# Authentication for Next.js and Serverless

This is the codebase to an article published on LogRocket and assumes you want to try out the sample application from the article.

## What you'll need

- MongoDB setup on your machine with a new databse called `nexauth`
- A new app with a Client ID and Client Secret from [Google's Developer Console](https://console.developers.google.com/)
- A Gmail account with all the right privileges

## How to install

- Clone this repository by running: `git clone git@github.com:francisudeji/authentication-for-nextjs-serverless.git` in your terminal of choice.
- `cd` into `authentication-for-nextjs-serverless`
- Install dependencies by running:

```bash
npm install
# or
yarn
```

- Replace the following environment variables with your credentials:

```bash
EMAIL_FROM=
EMAIL_USERNAME=
EMAIL_PASSWORD=
GOOGLE_ID=
GOOGLE_SECRET=
```

## How to run

- In your terminal, run:

```bash
npm run dev
# or
yarn dev
```

- Open your browser on http://localhost:3000

**Happy Coding**
