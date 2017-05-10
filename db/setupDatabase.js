//set up the database if not exist
const serverUrl = 'mysql://b0b83658064cf3:92570c85@us-cdbr-iron-east-03.cleardb.net';
const connection = {
  host: serverUrl,
  user: 'root',
  password: '',
  charset: 'utf8'
};
let knex = require('knex')({
  client: 'mysql',
  connection: connection,
  useNullAsDefault: true
});
knex.raw('CREATE DATABASE IF NOT EXISTS trendNewsDB')
  .then(function () {
    connection.database = 'trendNewsDB';
    knex = require('knex')({ client: 'mysql', connection: connection });
  }).catch(function (err) {
    console.log(err);
  });
connection.database = 'trendNewsDB';
knex = require('knex')({ client: 'mysql', connection: connection });
module.exports = knex;

// heroku_c1161a918a072b8?reconnect=true
