// database.js
const mysql = require('mysql');

// Replace the following with your own database connection details
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'pet_adoption',
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
