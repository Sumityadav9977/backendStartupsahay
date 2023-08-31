const mysql = require('mysql');
var connection = mysql.createConnection({
    user: "u521390442_root",
    password: "Sumit@1234",
    host: "217.21.85.204",
    database: "u521390442_adminpanel",
    port: 3306
});

connection.connect(function(err){
    if(err){
             console.log(err.sqlMessage);
    }
    else{
        console.log("{Database connection}")
    }
});

  
  
  
  
  
module.exports = connection;
