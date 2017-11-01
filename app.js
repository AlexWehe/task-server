"use strict";

let express = require('express');
let app = express();
let cors = require('cors');
let mongoose  = require('mongoose');
let bodyParser = require('body-parser');
let Task = require('./api/models/taskModel');

mongoose.connect('mongodb://localhost/taskDev', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./api/routes/taskRoutes');
routes(app);

app.use(function (req, res) {
   res.status(404).send({url: req.originalUrl + ' not found'})
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), () =>
    console.log('Node app is running on port', app.get('port'))
);