# Anime Dashboard App

![Anime Dashboard App](/img/dashboard-app.jpeg 'Anime Dashboard App')

This codebase is for the "A day in the life of a developer - Building a dashboard app with Node.js, Django and Next.js" article.

## Project install and setup

1. Run the command `npm install` inside of the `manga-backend-express` and `manga-client` folders to install the project dependencies
2. Run the command `npm run dev` to start the servers for `manga-backend-express` and `manga-client` directories
3. Run the command `python3 manage.py runserver` from the directory `manga-backend-django/manga` to start the Django server

## Server running ports

The `manga-backend-express` server and `manga-backend-django` are both running on port 8000. So either change the port number for one of them or just run one server at a time.

## Node.js Express environment variables

The `manga-backend-express` server requires a `.env` file in the root folder. See this example below which is setup to work with postgresql databases.

```shell
DATABASE_URL="postgresql://postgres:@localhost:5432/manga?schema=public"
PORT="8000"
ENVIRONMENT="development"
```