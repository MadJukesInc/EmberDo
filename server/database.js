var _ = require('lodash');
var Sequelize = require('sequelize');
var Config = require('./config');

var dbConfig = Config.get('/plugins/db');

var driver;

if (dbConfig.url && _.isString(dbConfig.url)) {
    driver = new Sequelize(dbConfig.url);
}
else {
    driver = new Sequelize(dbConfig.database, dbConfig.user,
        dbConfig.password, dbConfig.options);
}

exports.db = driver;

