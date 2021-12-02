const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "pma.ndi.unicolo.re",
  user: "db_secteur11",
  password: "0ff407511a68d",
  database: "db_secteur11",
  port: 3306
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection