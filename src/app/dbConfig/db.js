const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: "3306",
    database: 'blogdb',
    password: 'nhantran79'
})

connection.connect((err)=>{
    if(err) throw err;
});


module.exports = connection;