const util = require('util');
var mysql = require('mysql');

const pool =mysql.createPool({
    host : 'localhost',
    user :'Donia',
    password : '123123123d',
    database : 'indexer'
});

pool.getConnection((err , connection)=>{
    if (err) throw err ;
    else
    console.log("DB connected to my sql");
    if (connection)
    connection.release();

    return ;
})

pool.query = util.promisify(pool.query);
module.exports =pool ;
