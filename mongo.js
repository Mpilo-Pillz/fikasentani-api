require('dotenv').config();
const MongoClient = require('mongodb').MongoClient
const url = process.env.DB_URL 

const createSummary = async (req, res, next) => {

}

const getSummary = async (req, res, next) => {

}

exports.createSummary = createSummary;
exports.getSummary = getSummary;
