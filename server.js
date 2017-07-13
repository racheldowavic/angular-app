const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//get api routes
const api = require('./server/routes/api');
const app = express();

mongoose.connect('mongodb://racheldowavic:xW8q5Jz897qtQ1Ap@firstcluster-shard-00-00-hnuez.mongodb.net:27017,firstcluster-shard-00-01-hnuez.mongodb.net:27017,firstcluster-shard-00-02-hnuez.mongodb.net:27017/learneverything?ssl=true&replicaSet=firstCluster-shard-0&authSource=admin');

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set our api routes
app.use('/api', api);

//catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3800';
app.set('port', port);

//create the server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API running on localhost:${port}...`);
})
