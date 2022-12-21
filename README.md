# Cocktail Finder

This project helps you to find cocktails of your choice. Developed based on the data taken from [thecocktaildb.com](https://www.thecocktaildb.com/api.php)

## Features
- View Populer Cocktails
- Search your favourite cocktail
- View details (key Ingrediants, how to make) of a cocktail

## Tech

Dillinger uses a number of open source projects to work properly:

- React.js
  React makes it simple to create interactive lightweight user interfaces
- React Query - awesome web-based text editor
  React Query is a tool that makes your data fetching code faster, easier, and more powerful. This provides out of the box caching request retry on fail. Caching and Request retry helps to make the app more reliable and fast
- Axios
  lightweight, promise-based HTTP client. This helps for better error handling.
- Chakra UI
  This provides a set of accessible, reusable, and composable React components that make it super easy to create web apps. This is a light weight and more performance optimised than most of the other UI libraries. And It has the build in support for mobile responsiveness.
- TypeScript

## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd cocktails
npm i
npm run start
<!--This starts the app in port 3000-->
```

For production environments...

```sh
npm install --production
NODE_ENV=production npm run start
```

## License
MIT

**Free Software, Hell Yeah!**

