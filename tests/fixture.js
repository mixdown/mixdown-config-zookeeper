var ZooKeeperPlugin = require('../index.js');
var broadway = require('broadway');
var app = new broadway.App();

app.use(new ZooKeeperPlugin(), require('./connection.json'));

module.exports = app;