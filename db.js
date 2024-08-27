"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  console.log("Connecting to database:", getDatabaseUri()); // Log database URI
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  console.log("Connecting to database:", getDatabaseUri()); // Log database URI

  db = new Client({
    connectionString: getDatabaseUri()
  });
}

db.connect();

module.exports = db;