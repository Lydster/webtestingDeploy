# Web Testing IV Guided Project

Guided project for **Web Testing IV** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `yarn` or `npm i` to download dependencies.
- [ ] type `yarn server` or `npm run server` to start the API.

Please follow along as the instructor add automated tests to the API.

Steps to deploying posgres db in heroku 
(assumes you have server running with express and knex and have testing and dev enviroments set up in knexfile.)

in heroku
1. connect to github repo
2. enable automatic deploys
3. manual deploy -> deploy branch

go to overview -> build succeeded -> open app

go to dashboard -> resources -> add-ons -> Heroku postgres hobby-dev free

in knexfile
1. add production environment
2. add localPgConnection
3. add productionDbConnection

in Heroku
1. settings -> reveal config variables
2. add Config var DB_ENV
3. add value production to DB_ENV variable

in terminal
1. yarn add pg
2. push changes
3. npx heroku run knex migrate:latest -a <webappname>
  
4. npx heroku run knex seed:run -a <webappname>

