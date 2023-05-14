var mysql      = require('mysql');

// creating a database connection
var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'sush',
      password : 'sush123',
      database : 'my_db'
});
connection.connect();

module.exports = {
    connection : connection
};
