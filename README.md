# task-server
Simple node task server.

*Requires MongoDB server running*


* `npm install` to resolve dependencies
* `npm start` to run server
* Seed database: mongoimport --db taskDev --collection tasks --type json --file api/task-seed.json --jsonArray --drop
