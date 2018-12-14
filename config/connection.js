var mysql = require("mysql");
var connection;

// Connection Creation for JawsDB
if (process.env.JAWSDB_RL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

// Link the connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;