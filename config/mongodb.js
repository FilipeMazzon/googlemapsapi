'use strict';
const MongoClient = require('mongodb').MongoClient;

// Database Name
const dbName = 'googlemaps';

// Connection url
const url = "mongodb://localhost:27017";

exports = module.exports = {
    MongoClient: MongoClient,
    url: url,
    dbName: dbName
};