//IMPORTS
// using pg-promise, we now connect to the db and db is now database
// const pgp = require("pg-promise")()
// requiring dotenv file in .env, can now grab variables using process.env
require('dotenv').config();
console.log(process.env.PG_CONNECT_STR);
// console.log(path.join(__dirname + "../../.env"))

// from dotenv, connectionString will be the URL for database
const connectionString = process.env.PG_CONNECT_STR;

// const db = pgp(connectionString)

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: connectionString,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
// NOTES BELOW ON HOW TO GRAB DATA GENERALLY (NO DOTENV)
// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// var conString = "postgres://thszliqh:f6_hpjl5OD2XMZ62pWetNaCNOuOcDeGK@heffalump.db.elephantsql.com/thszliqh" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

// module.exports = db;
