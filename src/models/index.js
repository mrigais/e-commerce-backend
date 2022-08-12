const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
// db.mongoose = mongoose;
db.user = require("./user");
db.catalog = require("./catalog");
db.product = require("./product");
db.order = require("./order");
db.connection_url = "mongodb://127.0.0.1:27017/hybriddb";

module.exports = db;