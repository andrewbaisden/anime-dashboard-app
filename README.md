# Anime Dashboard App

![Anime Dashboard App](/img/dashboard-app.jpeg 'Anime Dashboard App')

This codebase is for the "A day in the life of a developer - Building a dashboard app with Node.js, Django and Next.js" article which you can find on my blogs:

[DEV Blog](https://dev.to/andrewbaisden/a-day-in-the-life-of-a-developer-building-a-dashboard-app-with-sql-nodejs-django-and-nextjs-5en7)

[Hashnode Blog](https://andrewbaisden.hashnode.dev/a-day-in-the-life-of-a-developer-building-a-dashboard-app-with-sql-nodejs-django-and-nextjs)

[Medium Blog](https://andrewbaisden.medium.com/a-day-in-the-life-of-a-developer-building-a-dashboard-app-with-sql-node-js-django-and-next-js-728cc341024c)

[CodeNewbie Blog](https://community.codenewbie.org/andrewbaisden/a-day-in-the-life-of-a-developer-building-a-dashboard-app-with-sql-nodejs-django-and-nextjs-2318)

## Prerequisites

- PostgreSQL installed
- MySQL installed
- SQLite installed
- Database Management System installed (Azure Data Studio or alternative)
- Node and npm installed
- Python installed with [virtualenv](https://pypi.org/project/virtualenv/) or an alternative

## Project install and setup

> You might need to use a different Python command when using Python it depends on how your computer is configured. For example you might need to use the command `python3` or `python`. The same applies to using `pip` or `pip3`.

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
